const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

function buildStyles() {
  return gulp.src('./css/**/*.scss')
    .pipe(concat("main.css"))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
  gulp.watch('./css/**/*.scss', buildStyles);
};