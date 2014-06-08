(function() {
  var module = {
    init: function() {
      module.post();
      module.list();
    },

    post: function() {
      var $post = $('.post:not(.post-item)');

      if ($post.length && !$('.metabar-item--reading-time').length) {
        var $target         = $('<span/>', {'class': 'metabar-item metabar-item--reading-time'}),
            words           = $post.find('.post-header, .post-body').text().trim().split(/\s+/g).length,
            wordsPerMinutes = 270,
            readTime        = Math.ceil(words / wordsPerMinutes);

        $('.metabar__side--right').append($target);

        $target.text(readTime + ' min')
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
            remoteTarget: '.post'
          });
        }
      });
    }
  };

  $(document).on('ready pjax:end', module.init);
}());
