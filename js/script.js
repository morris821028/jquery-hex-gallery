 (function($) {
  $("div.lazy").lazyload({
  });

  $("img.lazy").lazyload({
  });

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
        $("div.lazy").lazyload({
        });
      }, 2000);
  });
  $(".als-container").on('click', ".als-prev", function(){
      var timeout = setTimeout(function() {
        $("div.lazy").lazyload({
        });
      }, 2000);
  });
  $(".als-container").on('click', "[data-linkBtn]", function(){
      var timeout = setTimeout(function() {
        $("div.lazy").lazyload({
        });
      }, 2000);
  });
})(jQuery);