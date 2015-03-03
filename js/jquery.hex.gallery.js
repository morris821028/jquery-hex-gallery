$(document).ready(function() {
	var hex_header = '<div class="corner-1"></div><div class="corner-2"></div><div class="corner-3"></div>';

	function getBackground(row, eachrow) {
		var background = '',
			background_image = '';
		for (var i = 0; i < (row + 1) * (eachrow + 3); i++) {
			var displayClass = i % (eachrow + 3) ? 'hex' : 'hex hex-gap',
				hex = '';
			hex = hex_header + '<div class="inner"></div>';
			hex = '<div class="' + displayClass + '" style="background-image: url(' + background_image + ');">' + hex + '</div>';
			background += hex;
		}
		background = '<div class="hex-background">' + background + '</div>';
		return background;
	}

	function getHexContainer(html, row, eachrow, linkId) {
		html = '<div class="hex-container">' + getBackground(row, eachrow) + html + '</div>';
		html = '<li class="als-item" data-linkId="' + linkId + '">' + html + '</li>';
		return html;
	}

	function getBackHex(linkId, text) {
		var showurl = '',
			displayClass = 'hex hex-back',
			hex = '';
		hex = hex_header + '<div class="inner" data-linkBtn="' + linkId + '"><h4>' + text + '</h4><hr /></a></div>';
		hex = '<div class="' + displayClass + '" data-original="' + showurl + '" style="background-image: url(' + ');">' + hex + '</div>';
		return hex;
	}

	function getAlsItem(albumImages, options) {
		var alsview = '',
			eachrow = options.eachrow,
			index = 0,
			themePage = 0;
		var chunk = eachrow + 1;
		for (var st = 0, ed = albumImages.length; st < ed; st += chunk) {
			var pageImages = albumImages.slice(st, st + chunk),
				html = '',
				pagerow = 2;
			for (var i in pageImages) {
				var hex = '',
					imgAttr = pageImages[i],
					showurl = '',
					displayClass = 'hex';
				if (html.length == 0)
					displayClass += ' hex-gap';
				if (imgAttr['title']) {
					var linkBtn = options.themePage[index],
						title = imgAttr['title'];
					hex = hex_header + '<div class="inner" data-linkBtn="' + linkBtn + '">' + title + '</div>';
					if (imgAttr['class'])
						displayClass += " " + imgAttr['class'];
				} else {
					for (var attr in imgAttr) {
						hex += '<p><a href="' + imgAttr[attr] + '" class="hex-hover"><i class="icon-download"></i>' + attr + '</a></p>';
						showurl = imgAttr[attr];
					}
					hex = '<span class="hex-caption hex-simple-caption">' + hex + '</span> ';
					hex = hex_header + '<div class="inner">' + hex + '</div>';
				}
				index++;
				displayClass += ' lazy';
				hex = '<div class="' + displayClass + '" data-original="' + showurl + '" style="background-image: url(' + ');">' + hex + '</div>';
				html += hex;
			}

			options.alsPage++;
			if (st + chunk + 1 < ed)
				html += getBackHex(1, "NEXT");
			else
				html += getBackHex(-options.alsPage, "THIS END");
			html = getHexContainer(html, pagerow, eachrow, -options.alsPage);
			alsview += html;
			themePage++;
		}
		options.themePage.push(themePage);
		options.index++;
		return alsview;
	}

	$("script[type='text/hex-gallery']").each(function(index, value) {
		var $container = $(this),
			$widget,
			content = $container.text();
		var _config = {
			alsPage: 0,
			index: 1,
			eachrow: 7,
			themePage: [],
			head: false
		};
		var album = [],
			alsItem = '';

		content = JSON.parse(content);

		for (var i in content['album'])
			album.push(content['album'][i]['cover']);
		for (var i in content['album'])
			alsItem += getAlsItem(content['album'][i]['photo'], _config);
		_config.themePage.unshift(1);
		for (var i = 0, sum = 0; i < _config.themePage.length; i++) {
			sum += _config.themePage[i];
			_config.themePage[i] = sum;
		}
		_config.head = true;
		album = getAlsItem(album, _config);
		alsItem = album + alsItem;

		var alsview = '<div class="als-viewport"><ul class="als-wrapper">' + alsItem + '</ul></div>',
			left = '<span class="als-prev"><i class="icon-arrow-left" alt="prev" title="previous"></i></span>',
			right = '<span class="als-next"><i class="icon-arrow-right" alt="next" title="next"></i></span>';
		// var bullet = '<ul class="als-bullets"><li class="bullets-active">1</li><li>2</li><li>3</li><li>4</li></ul>';
		html = '<div class="als-container">' + alsview + left + right + /* bullet +*/ '</div>';

		$widget = $(html);

		$container.after($widget);

		$("div.lazy").lazyload({});

		$("img.lazy").lazyload({});

		$(".als-container").als({
			visible_items: 1,
			scrolling_items: 1,
			orientation: "horizontal",
			circular: "no",
			autoscroll: "no",
			start_from: 0
		});
		$(".als-container").on('click', ".als-next", function() {
			var timeout = setTimeout(function() {
				$("div.lazy").lazyload({});
			}, 2000);
		});
		$(".als-container").on('click', ".als-prev", function() {
			var timeout = setTimeout(function() {
				$("div.lazy").lazyload({});
			}, 2000);
		});
		$(".als-container").on('click', "[data-linkBtn]", function() {
			var timeout = setTimeout(function() {
				$("div.lazy").lazyload({});
			}, 2000);
		});
	});
});