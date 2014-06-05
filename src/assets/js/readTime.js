var ReadTime = (function ($) {

    'use strict';

    var module = {
      init: function() {
        $('.post').each(function() {
          var $readingTimeTarget = $('<span/>');

          $(this)
            .find('.post-meta-item-comments')
              .before(
                ' ',
                $('<li/>', {'class': 'post-meta-item post-meta-item-reading-time'}).append(
                  $('<i/>', {'class': 'fa fa-bookmark'}), ' ', $readingTimeTarget, ' ', 'read'
                ),
                ' '
              )
            .end()

            .readingTime({
              readingTimeTarget: $readingTimeTarget
            })
          ;
        });

        $('.post-item').each(function() {
          var $readingTimeTarget = $('<span/>');

          $(this)
            .find('.post-item-meta-item-comments')
              .before(
                ' ',
                $('<li/>', {'class': 'post-item-meta-item post-item-meta-item-reading-time'}).append(
                  $('<i/>', {'class': 'fa fa-bookmark'}), ' ', $readingTimeTarget, ' ', 'read'
                ),
                ' '
              )
            .end()

            .readingTime({
              readingTimeTarget: $readingTimeTarget,
              remotePath: $(this).find('.post-item-title a').attr('href'),
              remoteTarget: '.post'
            })
          ;
        });
      }
    };

    return { init: module.init };

}(jQuery));
