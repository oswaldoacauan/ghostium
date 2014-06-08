(function() {
  $(document).on('ready pjax:end', function() {
    var $post = $('.post');

    if ($post.length && !$post.hasClass('post--image')) {
      var $pBody = $post.find('.post-body'),
          $pImg  = $pBody.find('p:first img:only-child');

      if ($pImg.length) {
        var $header   = $post.find('.post-header'),
            $hContent = $header.find('.post-header-content'),
            resize = function() {
              $header.height($(window).height());
            };

        // assign class to post for styling and to prevent re-imaging
        $post.addClass('post--image');

        if (!$header.find('img').length) {
          $header.css('background-image', 'url(' + $pImg.attr('src') + ')');

          // markdown will have wrapped the img in a <p/>, so trash that too
          $pImg.parent().remove();
        }

        // grab first <p/> and move it into the header
        $pBody.find('p:first').detach().insertAfter($hContent.find('h1'));

        // if users is on a non-touch device, bind transitions
        if (!Modernizr.touch) {
          $(window).on('resize scroll', function() {
            var top = $(window).scrollTop();

            if (top < 0 || top > 1500) { return; }

            $hContent
              .css('transform', 'translateY(' + top / 10 + 'px)')
              .css('opacity', 1 - Math.max(top / 700, 0))

              .parent()
                .css('background', 'rgba(0, 0, 0, ' + Math.max(top / 1400, 0) + ')')
              .end()
            ;
          });
        }

        $(document).on('pjax:end', resize);
        $(window).on('resize', resize);

        resize();
      }
    }
  });
})();
