(function() {
  var module = {
    init: function() {
      module.post();
      module.list();
    },

    config: {
      selector: '.post-header, .post-body'
    },

    post: function() {
      var $post = $('.post:not(.post-item)');

      if ($post.length && !$('.metabar-item--reading-time').length) {
        var $side        = $('.metabar__side--right'),
            $social      = $side.find('.metabar-item--social'),
            $readingTime = $('<span/>', {'class': 'metabar-item metabar-item--reading-time'});

        if ($social.length) {
          $social.before($readingTime);
        } else {
          $side.append($readingTime);
        }

        $post.find(module.config.selector).readingTime({
          readingTimeTarget: $readingTime
        });
      }
    },

    list: function() {
      $('.post-item').each(function() {
        var $list = $(this).find('.post-item-meta-list');

        if (!$list.find('.post-item-meta-item-reading-time').length) {
          var $target      = $('<span/>'),
              $comments    = $list.find('.post-item-meta-item-comments'),
              $readingTime = $('<li/>', {'class': 'post-item-meta-item post-item-meta-item-reading-time'}).append(
                $('<i/>', {'class': 'fa fa-book'}), ' ', $target
              );

          if ($comments.length) {
            $comments.before(' ',  $readingTime, ' ');
          } else {
            $list.append(' ',  $readingTime, ' ');
          }

          $(this).readingTime({
            readingTimeTarget: $target,
            remotePath: $(this).find('.post-item-title a').attr('href'),
            remoteTarget: module.config.selector
          });
        }
      });
    }
  };

  $(document).on('ready pjax:end', module.init);
}());
