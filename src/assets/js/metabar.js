(function() {
  $(document).on('ready pjax:end', function() {
    var $metabar    = $('.metabar'),
        currentYear = new Date().getFullYear();

    // hide year if current
    $metabar.find('time[datetime ^= ' + currentYear + '] span')
      .addClass('js-hidden')
    ;

    // if not a touch device and on a post, affix the metabar on upwards scrolls
    if (!Modernizr.touch) {
      var $post = $('.post:not(.post-item');

      if ($post.length) {
        var $header = $post.find('.post-header'),
            height   = $metabar.outerHeight(),
            previous = $(window).scrollTop(),
            trans    = -height;

        $(window).on('scroll', function() {
          var y                = $(this).scrollTop()
              isAtTop          = y <= 0,
              isHalfPastHeader = y > $header.height() / 2,
              isScrollingUp    = y < previous,
              isTransitioned   = trans > -height;

          if (!Drawer.isOpen() && (isHalfPastHeader && isScrollingUp || !isAtTop && isTransitioned)) {
            trans += previous - y;

            if (trans > 0)       trans = 0;
            if (trans < -height) trans = -height;

            $metabar
              .addClass('metabar--affixed')
              .removeClass('metabar--static')
              .css('transform', 'translateY(' + trans + 'px)')
            ;
          } else {
            $metabar
              .removeClass('metabar--affixed')
              .addClass('metabar--static')
              .css('transform', 'none')
            ;

            trans = -height;
          }

          previous = y;
        });
      }
    }
  });
})();
