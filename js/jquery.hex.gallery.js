$(document).ready(function() {

	var hex_header = '<div class="corner-1"></div><div class="corner-2"></div><div class="corner-3"></div>';

	function getHexHtml(displayClass, background_image, text, showurl, linkId) {
		background_image = background_image || '';
		linkId = typeof linkId !== 'undefined' ? ' data-linkBtn="' + linkId + '"' : ' ';
		text = typeof text !== 'undefined' ? text : '';
		showurl = typeof showurl !== 'undefined' ? '" data-original="' + showurl + '"' : ' ';

		var hex_header = '<div class="corner-1"></div><div class="corner-2"></div><div class="corner-3"></div>';
		hex = hex_header + '<div class="inner"' + linkId + '><h4>' + text + '</h4></a></div>';
		hex = '<div class="' + displayClass + '"' + showurl + ' style="background-image: url(' + ');">' + hex + '</div>';
		return hex;
	}

	function getBackHex(linkId, text) {
		var displayClass = 'hex hex-back hex-content';
		return getHexHtml(displayClass, '', text, '', linkId);
	}

	function getBackground(row, eachrow) {
		var background = '',
			background_image = '';
		for (var i = 0; i < (row + 1) * (eachrow + 3); i++) {
			var displayClass = i % (eachrow + 3) ? 'hex' : 'hex hex-gap';
			background += getHexHtml(displayClass, background_image);
		}
		background = '<div class="hex-background">' + background + '</div>';
		return background;
	}

	function getHexContainer(html, row, eachrow, linkId) {
		html = '<div class="hex-container">' + getBackground(row, eachrow) + html + '</div>';
		html = '<li class="als-item" data-linkId="' + linkId + '">' + html + '</li>';
		return html;
	}

	function getAlsItem(albumImages, options, isCover) {
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
				var	imgAttr = pageImages[i],
					showurl = '',
					displayClass = html.length == 0 ? 'hex lazy hex-gap hex-content': 'hex lazy hex-content',
					text = '',
					linkId = undefined;

				if (imgAttr['title']) {
					text = imgAttr['title'];
					linkId = options.themePage[index];
					showurl = imgAttr['img'];
					if (imgAttr['class'])
						displayClass += " " + imgAttr['class'];
				} else {
					for (var attr in imgAttr) {
						text += '<p><a href="' + imgAttr[attr] + '" class="hex-hover"><i class="icon-download"></i>' + attr + '</a></p>';
						showurl = imgAttr[attr];
					}
					text = '<span class="hex-caption hex-simple-caption">' + text + '</span> ';
				}
				index++;
				html += getHexHtml(displayClass, '', text, showurl, linkId);
			}

			options.alsPage++;
			if (st + chunk + 1 < ed)
				html += getBackHex(1, '<p>Next <i class="icon-forward"></i></p>');
			else if (!isCover || (isCover && themePage > 1))
				html += getBackHex(-options.alsPage, '<p><i class="icon-reply"></i>Back</p>');
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
			alsItem += getAlsItem(content['album'][i]['photo'], _config, false);
		_config.themePage.unshift(1);
		for (var i = 0, sum = 0; i < _config.themePage.length; i++) {
			sum += _config.themePage[i];
			_config.themePage[i] = sum;
		}
		_config.head = true;
		alsItem = getAlsItem(album, _config, true) + alsItem;

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