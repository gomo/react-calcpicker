var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackStream = require('webpack-stream');
var notifier = require('node-notifier');
var compass = require('gulp-compass');
var rename = require('gulp-rename');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');

function logError(error){
  notifier.notify({
    title: error.plugin,
    message: error.message
  })

  gutil.log(error)
}

gulp.task('build-sass', function() {
  return gulp.src(['src/sass/*.scss', 'src/sass/**/*.scss'])
    .pipe(compass({
      css: 'dist/css',
      sass: 'src/sass'
    }))
    .on('error', logError)
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('docs/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCss())
    .on('error', logError)
    .pipe(gulp.dest('dist/css'))
    ;
});

gulp.task('watch-sass', function() {
  gulp.watch(['src/sass/*.scss', 'src/sass/**/*.scss'], ['build-sass']);
});

gulp.task('build-docs-sass', function() {
  return gulp.src(['docs-src/sass/*.scss', 'docs-src/sass/**/*.scss'])
    .pipe(compass({
      css: 'docs/css',
      sass: 'docs-src/sass'
    }))
    .on('error', logError)
    .pipe(gulp.dest('docs/css'))
    ;
});

gulp.task('watch-docs-sass', function() {
  gulp.watch(['docs-src/sass/*.scss', 'docs-src/sass/**/*.scss'], ['build-docs-sass']);
});

gulp.task('build-src', function() {
  var config = require('./src/js/webpack.config.js');
  return gulp.src('src/js/react-calcpicker.js')
    .pipe(webpackStream(config, webpack))
    .on('error', logError)
    .pipe(gulp.dest('./dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .on('error', logError)
    .pipe(gulp.dest('./dist'))
});

gulp.task('build-docs', function() {
  var config = require('./docs-src/js/webpack.config.js');
  return gulp.src('./docs-src/js/app.js')
    .pipe(webpackStream(config, webpack))
    .on('error', logError)
    .pipe(gulp.dest('./dist'))
});


gulp.task('default', ['build-sass', 'build-docs-sass', 'build-src', 'build-docs', 'watch-sass', 'watch-docs-sass'])