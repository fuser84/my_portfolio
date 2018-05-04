'use strict';
let gulp = require('gulp'),
    cssMin = require('gulp-css'),
    browserSync = require('browser-sync');


gulp.task('cssMinify', function(){
   return gulp.src('./css/*.css')
       .pipe(cssMin())
       .pipe(gulp.dest('./css'));
});

gulp.task('css:watch', function(){
   gulp.watch('./css/*.css', ['cssMinify']);
});

gulp.task('browser-sync', function(){
   let files = [
       './*.html',
       './css/*.css',
       './img/*.{png,jpg,gif}',
       './js/*.js'
   ];

   browserSync.init(files, {
      server: {
          baseDir: './'
      }
   });
});

gulp.task('default', ['browser-sync'], function(){
   gulp.start('css:watch');
});