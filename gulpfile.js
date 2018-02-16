'use strict'

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require("browserify");
var source =  require("vinyl-source-stream");
var electron = require("electron-connect").server.create();

gulp.task('views',function buildHTML(){
    gulp.src('./*.pug')
        .pipe(pug({pretty: true}).on('error', sass.logError))
        .pipe(gulp.dest('./'))
});

gulp.task('sass', function() {
    var autoprefixerOptions = {
        browsers: ['last 2 versions'],
    };
    var filterOptions = '**/*.css';
    var reloadOptions = {
        stream: true,
    };
    return gulp.src('./*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'));
});

gulp.task("browserify", function() {
 var b = browserify({
 entries: ["./react_main.js"],
 debug: true
 });
 b.transform("babelify", {presets: ["es2015", "react"]});
 return b.bundle()
 .pipe(source("index.js"))
 .pipe(gulp.dest("./"));
});

gulp.task('electron_start',function(){
  electron.start();
});

gulp.task('watch', function() {
    gulp.watch('./*.pug', ['views']);
    gulp.watch('./*.sass', ['sass']);
    gulp.watch('./react*.js', ['browserify']);
    gulp.watch('main.js', electron.restart);
    gulp.watch(['index.html','main.css','react_main.js'], electron.reload);
});

gulp.task('build', ['sass', 'views', 'browserify']);
gulp.task('default', ['build', 'watch','electron_start']);
