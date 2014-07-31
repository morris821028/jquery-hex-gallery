$(document).ready(function() {
	$("script[type='text/hex-gallery']").each(function(index, value) {
		if (index == 0) {
			console.log("WTF");
			$('head').append(
				'<style type="text/css">' + '.hex-container{width:700px;height:100%;display:inline-block}.hex{width:150px;height:86px;background-color:#ccc;background-repeat:no-repeat;background-position:50% 50%;-webkit-background-size:cover;-moz-background-size:cover;background-size:cover;position:relative;float:left;margin:25px 5px;text-align:center;zoom:1;-webkit-animation:animatedBackground 10s linear infinite;-moz-animation:animatedBackground 10s linear infinite;-ms-animation:animatedBackground 10s linear infinite;animation:animatedBackground 10s linear infinite;}.hex.hex-gap{margin-left:86px}.hex a{display:block;width:100%;height:100%;text-indent:-9999em;position:absolute;top:0;left:0}.hex .corner-1{-webkit-transform:rotate(60deg);-moz-transform:rotate(60deg);-ms-transform:rotate(60deg);-o-transform:rotate(60deg);-webkit-transform:rotate(60deg);-moz-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg);}.hex .corner-1:before{-webkit-transform:rotate(-60deg) translate(-87px,0);-moz-transform:rotate(-60deg) translate(-87px,0);-ms-transform:rotate(-60deg) translate(-87px,0);-o-transform:rotate(-60deg) translate(-87px,0);-webkit-transform:rotate(-60deg) translate(-87px,0);-moz-transform:rotate(-60deg) translate(-87px,0);-ms-transform:rotate(-60deg) translate(-87px,0);transform:rotate(-60deg) translate(-87px,0);-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;-o-transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}.hex .corner-2{-webkit-transform:rotate(-60deg);-moz-transform:rotate(-60deg);-ms-transform:rotate(-60deg);-o-transform:rotate(-60deg);-webkit-transform:rotate(-60deg);-moz-transform:rotate(-60deg);-ms-transform:rotate(-60deg);transform:rotate(-60deg);}.hex .corner-2:before{-webkit-transform:rotate(60deg) translate(-44px,-12px);-moz-transform:rotate(60deg) translate(-44px,-12px);-ms-transform:rotate(60deg) translate(-44px,-12px);-o-transform:rotate(60deg) translate(-44px,-12px);-webkit-transform:rotate(60deg) translate(-44px,-12px);-moz-transform:rotate(60deg) translate(-44px,-12px);-ms-transform:rotate(60deg) translate(-44px,-12px);transform:rotate(60deg) translate(-44px,-12px);bottom:0}.hex .corner-3{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}.hex .corner-3:before{-webkit-transform:rotate(0) translate(-12px,-44px);-moz-transform:rotate(0) translate(-12px,-44px);-ms-transform:rotate(0) translate(-12px,-44px);-o-transform:rotate(0) translate(-12px,-44px);-webkit-transform:rotate(0) translate(-12px,-44px);-moz-transform:rotate(0) translate(-12px,-44px);-ms-transform:rotate(0) translate(-12px,-44px);transform:rotate(0) translate(-12px,-44px);bottom}.hex .inner{width: 150px;height: 86px;color:#eee;position:absolute;top:0;right:0;}.hex .inner a{text-indent:0;color:#fff}.hex h4{font-family:"Josefin Sans",sans-serif;margin:0}.hex hr{border:0;border-top:1px solid #eee;width:60%;margin:15px auto}.hex p{font-size:16px;font-family:"Source Code Pro",Consolas,Monaco,Menlo,Consolas,monospace;width:80%;margin:0 auto}.hex.hex-1{background:#74cddb}.hex.hex-2{background:#f5c53c}.hex.hex-3{background:#80b971}.hex .corner-1,.hex .corner-2,.hex .corner-3{position:absolute;top:0;left:0;width:100%;height:100%;background:inherit;overflow:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.hex .corner-1:before,.hex .corner-2:before,.hex .corner-3:before{width:173px;height:173px;content:"";position:absolute;top:0;left:0;background:inherit;background-repeat:no-repeat;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.hex-caption{background-color:rgba(0,0,0,0.5);position:absolute;color:#fff;-webkit-transition:all 300ms ease-out;-moz-transition:all 300ms ease-out;-o-transition:all 300ms ease-out;-ms-transition:all 300ms ease-out;-webkit-transition:all 300ms ease-out;-moz-transition:all 300ms ease-out;-ms-transition:all 300ms ease-out;transition:all 300ms ease-out;left:0}.hex:hover .hex-simple-caption{-moz-transform:translateY(-100%);-o-transform:translateY(-100%);-webkit-transform:translateY(-100%);-webkit-transform:translateY(-100%);-moz-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);visibility:visible}.hex-simple-caption{height:30px;width:100%;display:block;bottom:-30px;line-height:25pt;text-align:center;visibility:hidden}@-moz-keyframes animatedBackground{from{background-position:0 0}to{background-position:100% 0}}@-webkit-keyframes animatedBackground{from{background-position:0 0}to{background-position:100% 0}}@-o-keyframes animatedBackground{from{background-position:0 0}to{background-position:100% 0}}@keyframes animatedBackground{from{background-position:0 0}to{background-position:100% 0}}' + '</style>'
			);
		}
		var $container = $(this),
			$widget,
			content = $container.text();

		content.trim();
		var html = '';
		var images = content.split('}');
		for (var i in images) {
			var hexheader = '<div class="corner-1"></div><div class="corner-2"></div><div class="corner-3"></div>';
			var tag = '';
			if (images[i].trim().length <= 0)
				continue;
			var imgAttr = images[i] + '}',
				showurl = '',
				displayClass = 'hex';
			imgAttr = JSON.parse(imgAttr);
			if (imgAttr['title']) {
				tag = hexheader + '<div class="inner">' + imgAttr['title'] + '</div>';
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
			if (i % 7 == 0)
				displayClass += " hex-gap";

			tag = '<div class="' + displayClass + '" style="background-image: url(' + showurl + ');">' + tag + '</div>';
			html += tag;
		}
		html = '<div class="hex-container">' + html + '</div>';

		$widget = $(html);

		$container.after($widget);
	});
});