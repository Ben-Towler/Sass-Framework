
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const $ = require('gulp-load-plugins')();

const publicDir = './public';

// Utility to ignore Node modules and Bower components
// when generating the glob patterns array for gulp.src()
function addDefSrcIgnore (srcArr) {
  return srcArr.concat([
    '!node_modules{,/**}',
    `!${publicDir}/bower_components{,/**}`,

    '!.git{,/**}',
    '!**/.DS_Store'
  ]);
}

gulp.task('default', function () {

  browserSync.init({
    server: {baseDir: publicDir}
  });

  gulp.watch([
    publicDir + '/index.html',
    publicDir + '/styles/*.css',
    publicDir + '/bower_components/*',
    publicDir + '/images/*'
  ]).on('change', browserSync.reload);

});

// Lint all files
gulp.task('lint', ['lint-js', 'lint-html', 'lint-css']);

// JavaScript and JSON linter
gulp.task('lint-js', function () {
  return gulp.src(addDefSrcIgnore(['**/*.js', '**/*.json']), {dot: true})
    .pipe($.eslint({dotfiles: true}))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

// HTML linter
gulp.task('lint-html', function () {
  return gulp.src([`${publicDir}/*.html`])
    .pipe($.htmlLint({htmllintrc: '.htmllintrc.json'}))
    .pipe($.htmlLint.format())
    .pipe($.htmlLint.failAfterError());
});

// CSS linter
gulp.task('lint-css', function () {
  return gulp.src([`${publicDir}/styles/*.css`])
    .pipe($.stylelint({
      failAfterError: true,
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});
