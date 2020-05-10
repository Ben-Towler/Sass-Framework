const gulp = require('gulp');
const fs = require('fs');
const del = require('del');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();

const paths = {
  styles: {
    src: 'public/styles/scss/**/*.scss',
    dest: 'public/styles'
  }
};

function style () {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function reload (done) {
  browserSync.reload();
  done();
}

function watch () {
  browserSync.init({
    server: {baseDir: './public'}
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch('public/index.html', reload);
}

exports.watch = watch;
exports.style = style;

var build = gulp.parallel(style, watch);
 
gulp.task('default', build);