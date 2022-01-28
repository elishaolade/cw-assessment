'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

exports.default = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel('sass'));
}

/* Compiles sass files in sass directory */
/* Change to desired CSS Preprocessor */
gulp.task('sass', function() {
    return gulp.src("./src/styles/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"));
});