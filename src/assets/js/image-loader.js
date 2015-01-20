var ImageLoader = (function ($) {

    'use strict';

    var _body = $('body'),
        _container = $('#container'),
        _overlay = $('.drawer-overlay');

    var module = {
        done: function(e) {
          e.addClass('image-loaded');
        },
        success: function(e, image) {
          e.css('background-image', 'url(' + image.src + ')');
          module.done(e);
        },
        init: function($el) {
          var image = new Image(),
              src = $el.data('load-image');

          if(src.length) {
            image.src = src;
            image.onload = module.success($el, image);
            image.onerror = module.done($el);
            image.onabort = module.done($el);
          }

          return image;
        }
    };

    return { load: module.init };

}(jQuery));
