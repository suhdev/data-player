var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	babel = require("gulp-babel"),
	stylish = require('jshint-stylish'),
	browserify = require('gulp-browserify');

gulp.task('compile', function() {
     return gulp.src("src/**/*.js")
    // .pipe(sourcemaps.init())
    .pipe(babel())
    // .pipe(concat("all.js"))
    // .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/scripts"));
});

gulp.task('group',['compile'],function(){
	gulp.src("src/**/*.js")
	.pipe(concat('shui.min.js'))
    .pipe(babel())
    .pipe(gulp.dest("dist/scripts"));
});

gulp.task('default',['group'],function(){
	return gulp.watch('src/**/*.js', ['group']);
});