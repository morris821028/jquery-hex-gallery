$(document).ready(function() {

	function getBackground(row, eachrow) {
		var background = '';
		for (var i = 0; i < (row + 1) * (eachrow + 3); i++) {
			var hexheader = '<div class="corner-1"></div><div class="corner-2"></div><div class="corner-3"></div>';
			var showurl = '',
				displayClass = 'hex';
			if (i % (eachrow + 3) == 0)
				displayClass += " hex-gap", row;
			tag = hexheader + '<div class="inner"></div>';
			tag = '<div class="' + displayClass + '" style="background-image: url(' + showurl + ');">' + tag + '</div>';
			background += tag;
		}
		background = '<div class="hex-background">' + background + '</div>';
		return background;
	}

	function getHexContainer(html, row, eachrow, linkId) {
		html = '<div class="hex-container">' + getBackground(row, eachrow) + html + '</div>';
		html = '<li class="als-item" data-linkId="' + linkId + '">' + html + '</li>';
		return html;
	}

	function getBackLink(linkId, text) {
		var hexheader = '<div class="corner-1"></div><div class="corner-2"></div><div class="corner-3"></div>';
		var html = '',
			tag = '',
			showurl = '',
			displayClass = 'hex hex-back';
		var tag = hexheader + '<div class="inner" data-linkBtn="' + linkId + '"><h4>' + text + '</h4><hr /></a></div>';
		tag = '<div class="' + displayClass + '" data-original="' + showurl + '" style="background-image: url(' + ');">' + tag + '</div>';
		html += tag;
		return html;
	}

	function getAlsItem(images, options) {
		var html = '',
			alsview = '',
			eachrow = options.eachrow,
			row = 0,
			index = 0,
			imgCount = 0,
			themePage = 0;
		for (var i in images) {
			var hexheader = '<div class="corner-1"></div><div class="corner-2"></div><div class="corner-3"></div>',
				tag = '',
				imgAttr = images[i],
				showurl = '',
				displayClass = 'hex';

			if (imgAttr['title']) {
				var linkBtn = options.themePage[index];
				tag = hexheader + '<div class="inner" data-linkBtn="' + linkBtn + '">' + imgAttr['title'] + '</div>';
				if (imgAttr['class'])
					displayClass += " " + imgAttr['class'];
			} else {
				for (var j in imgAttr) {
					tag += '<p><a href="' + imgAttr[j] + '" class="hex-hover"><i class="icon-download"></i>' + j + '</a></p>';
					showurl = imgAttr[j];
				}
				tag = '<span class="hex-caption hex-simple-caption">' + tag + '</span> ';
				tag = hexheader + '<div class="inner">' + tag + '</div>';
			}

			if (imgCount % (eachrow + 1) == 0) {
				if (html.length > 0) {
					options.alsPage++;
					html += getBackLink(1, "NEXT");
					html = getHexContainer(html, row, eachrow, -options.alsPage);
					alsview += html;
					imgCount = 0;
					row = 0;
					themePage++;
				}
				displayClass += " hex-gap";
				html = '';
				row++;
			}
			index++;
			imgCount++;
			displayClass += ' lazy';
			tag = '<div class="' + displayClass + '" data-original="' + showurl + '" style="background-image: url(' + ');">' + tag + '</div>';
			html += tag;
		}
		if (html.length > 0) {
			options.alsPage++;
			if (!options.head)
				html += getBackLink(-options.alsPage, "THIS END");
			html = getHexContainer(html, row, eachrow, -options.alsPage);
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
		content = JSON.parse(content);
		var data = {
			alsPage: 0,
			index: 1,
			eachrow: 7,
			themePage: [],
			head: false
		};
		var album = [],
			alsItem = '';
		for (var i in content['album'])
			album.push(content['album'][i]['cover']);
		for (var i in content['album'])
			alsItem += getAlsItem(content['album'][i]['photo'], data);
		data.themePage.unshift(1);
		for (var i = 0, sum = 0; i < data.themePage.length; i++) {
			sum += data.themePage[i];
			data.themePage[i] = sum;
		}
		data.head = true;
		album = getAlsItem(album, data);
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