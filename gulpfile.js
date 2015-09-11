'use strict';

var gulp   = require('gulp'),
  watch    = require('gulp-watch'),
  connect  = require('gulp-connect'),
  path     = require('path'),
  haml     = require('gulp-haml'),
  sass     = require('gulp-sass'),
  port     = 4000;

gulp.task('haml', function () {
  gulp.src('./src/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
  gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('index', function () {
  gulp.src('./src/index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['**/*.*'], ['index', 'haml', 'sass']);
});

gulp.task('webserver', function() {
  connect.server({
    root: './',
    port: 3000
  });
});

gulp.task('default', [
  'index', 'haml', 'webserver', 'watch', 'sass'
]);