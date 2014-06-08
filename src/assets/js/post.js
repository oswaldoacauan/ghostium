(function() {
  $(document).on('ready pjax:end', function() {
    var $post = $('.post');

    if ($post.length) {
      // hide year if current
      $post.find('.post-meta-bar').each(function() {
        $(this).find('time[datetime ^= ' + new Date().getFullYear() + '] span').addClass('js-hidden')
      });
    }
  });
})();
