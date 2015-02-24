var gulp = require('gulp');

require('./gulp-tasks/bundle.styles');
require('./gulp-tasks/bundle.assets');
require('./gulp-tasks/bundle.scripts');

gulp.task('watch', function() {
  gulp.start('watch:styles' );
  gulp.start('watch:scripts' );
});

gulp.task( 'default', ['bundle:assets','bundle:styles', 'bundle:scripts:vendors', 'bundle:scripts'], function() {
  gulp.start('watch' );
});
