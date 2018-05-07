'use strict';

var gulp = require('gulp'),
    cssMin = require('gulp-css'),
    browserSync = require('browser-sync'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cleanCss = require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    htmlmin = require('gulp-htmlmin'),
    babel = require('gulp-babel'),
    concatCss = require('gulp-concat-css'),
    concatJS = require('gulp-concat'),
    inlineCss = require('gulp-inline-css'),
    inline = require('gulp-inline');




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

gulp.task('clean', function(){
    return del(['dist']);
});

gulp.task('copyfonts', function(){
    gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(gulp.dest('./dist/fonts'));
});




gulp.task('imagemin', function(){
    return gulp.src('img/*.{png,jpg,gif,jpeg}')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true}))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('JSminify', () => {
    return gulp.src(['js/my_portfolio.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concatJS("all.js"))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('HTMLminify', function() {
    return gulp.src('./*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('cssMinifyProd', function(){
    return gulp.src(['./css/*.css'])
        .pipe(concatCss("bundle_css.css"))
        .pipe(cleanCss())
        .pipe(rev())
        .pipe(gulp.dest('dist/css'));
});



gulp.task('usemin', function () {
    return gulp.src('./*.html')
        .pipe(flatmap(function (stream, file) {
            return stream
                .pipe(usemin({
                    css: [function () { return cssMin()}, rev()],
                    html: [function () { return htmlmin({collapseWhitespace: true})}],
                    js: [function () {return babel({presets: ['es2015']})}, uglify(), rev()],
                    inlinejs: [uglify()],
                    inlinecss:[cleanCss(), 'concat']
                }))
        }))
        .pipe(gulp.dest('dist/'))
});

gulp.task('build', ['clean'], function () {
    gulp.start('cssMinifyProd','imagemin','JSminify', 'HTMLminify');
});

