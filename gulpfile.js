'use strict'

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require("browserify");
var source =  require("vinyl-source-stream");

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
 entries: ["./main.js"],
 debug: true
 });
 b.transform("babelify", {presets: ["es2015", "react"]});
 return b.bundle()
 .pipe(source("index.js"))
 .pipe(gulp.dest("./"));
});

gulp.task('watch', function() {
    gulp.watch('./*.pug', ['views'])
    gulp.watch('./*.sass', ['sass'])
    gulp.watch('./*n.js', ['browserify']);
});

gulp.task('build', ['sass', 'views', 'browserify']);
gulp.task('default', ['build', 'watch']);
