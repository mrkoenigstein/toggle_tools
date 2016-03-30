'use strict';
var gulp = require('gulp'),
    stripDebug = require('gulp-strip-debug'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify')
    
gulp.task('uglify', function(){
    gulp.src('toggle_tools.js')
        .pipe(uglify())
        .pipe(stripDebug())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['uglify']);