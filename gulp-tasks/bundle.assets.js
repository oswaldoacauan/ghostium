'use strict';

var gulp = require('gulp');
var bower = require('gulp-bower');
var gulpif = require('gulp-if');

var config = require('./config.json');
var paths = config.paths;
var isProduction = ( process.env.NODE_ENV === 'production' );


gulp.task('bundle:assets', ['assets:bower:install'], function () {
  return gulp.start('assets:copy:fonts');
});


gulp.task('assets:copy:fonts', function () {
  return gulp.src(paths.bowerDir + '/fontawesome/fonts/*.{ttf,woff,woff2,eof,svg,eot}')
    .pipe(gulp.dest(paths.build.fontsDir));
});

gulp.task('assets:bower:install', function () {
  return bower();
});
