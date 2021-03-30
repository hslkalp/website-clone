'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const autoPrefixer = require('gulp-autoprefixer')
sass.compiler = require('node-sass')

gulp.task('sass', function () {
  return gulp
    .src('./scss/main.scss')
    .pipe(autoPrefixer('last 2 version'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'))
})
