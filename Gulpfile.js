'use strict';

var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint');

gulp.task('sass-lint', function () {
  return gulp.src('sass/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
