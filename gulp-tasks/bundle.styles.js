'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var size = require('gulp-size');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');

var config = require('./config.json');
var paths = config.paths;


var isProduction = ( process.env.NODE_ENV === 'production' );

gulp.task('bundle:styles', function () {

  var sassOptions = {
    style: 'compressed',
    sourcemap: true,
    loadPath: [
      paths.bowerDir + '/fontawesome/scss'
    ]
  };

  return sass(paths.sassDir + '/styles.scss', sassOptions)
    .pipe(plumber())
    .on('error', function () {
      gutil.log(arguments);
      this.emit('end');
    })
    .pipe(autoprefixer({ browsers: ['last 2 versions', '> 1%'] }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpif(!isProduction, sourcemaps.write('./')))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(paths.build.cssDir));

});

gulp.task('watch:styles', ['bundle:styles'] , function () {
  gulp.watch(paths.sassDir + '/*.scss', ['bundle:styles']);
});
