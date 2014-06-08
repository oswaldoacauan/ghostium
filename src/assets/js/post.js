(function() {
  $(document).on('ready pjax:end', function() {
    var $post = $('.post');

    if ($post.length) {
      var currentYear = new Date().getFullYear();

      // hide year if current
      $post.find('.post-meta-bar time[datetime ^= ' + currentYear + '] span')
        .addClass('js-hidden')
      ;
    }
  });
})();
