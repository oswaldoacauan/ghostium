(function() {
  $(document).on('ready pjax:end', function() {
    var $post = $('.post:not(.post-item)'),
        $metabar = $('.metabar');

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

        // invert the metabar
        $metabar.addClass('metabar--static--inversed');

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
            var y = $(window).scrollTop();

            if (y < 0 || y > $header.height()) { return; }

            $hContent
              .css('transform', 'translateY(' + y / 10 + 'px)')
              .css('opacity', 1 - Math.max(y / 700, 0))

              .parent()
                .css('background', 'rgba(0, 0, 0, ' + Math.max(y / 1400, 0) + ')')
              .end()
            ;
          });
        }

        // add post-arrow
        $hContent.append(
          $('<span/>', {'class': 'post-arrow'}).click(function() {
            $('html, body').animate(
              {scrollTop: $('section.wrapper-post').offset().top}, 500
            );
          })
        );

        $(document).on('pjax:end', resize);
        $(window).on('resize', resize);

        resize();
      } else {
        $metabar.removeClass('metabar--static--inversed');
      }
    }
  });
})();
