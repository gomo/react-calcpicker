var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var notifier = require('node-notifier');
var compass = require('gulp-compass');
var rename = require('gulp-rename');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('build-sass', function() {
  return gulp.src(['src/sass/*.scss', 'src/sass/**/*.scss'])
    .pipe(compass({
      css: 'dist/css',
      sass: 'src/sass',
      image: 'dist/img',
      import_path: ["src/sass"]
    }))
    .on('error', function(error){
      notifier.notify({
        title: error.plugin,
        message: error.message
      });
      this.emit('end');
    })
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('docs/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCss())
    .on('error', function(error){
      notifier.notify({
        title: error.plugin,
        message: error.message
      });
      this.emit('end');
    })
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
      sass: 'docs-src/sass',
      image: 'docs/img',
      import_path: ["docs-src/sass"]
    }))
    .on('error', function(error){
      notifier.notify({
        title: error.plugin,
        message: error.message
      });
      this.emit('end');
    })
    .pipe(gulp.dest('docs/css'))
    ;
});

gulp.task('watch-docs-sass', function() {
  gulp.watch(['docs-sass/sass/*.scss', 'docs-sass/sass/**/*.scss'], ['build-docs-sass']);
});

gulp.task('build-src', function() {
  var config = require('./src/js/webpack.config.js');
  webpack(config, function(err, stats) {
    //notifier
    if (stats.compilation.errors.length) {
      notifier.notify({
        title: 'Webpack',
        message: stats.compilation.errors[0].message
      });
    }

    //console log
    gutil.log("[webpack]", stats.toString({}));

    //uglify
    gulp.src(config.output.path + '/' + config.output.filename)
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify({
        preserveComments: 'license'
      }))
      .pipe(gulp.dest(config.output.path))

  });
});

gulp.task('build-docs', function() {
  var config = require('./docs-src/js/webpack.config.js');
  webpack(config, function(err, stats) {
    //notifier
    if (stats.compilation.errors.length) {
      notifier.notify({
        title: 'Webpack',
        message: stats.compilation.errors[0].message
      });
    }

    //console log
    gutil.log("[webpack]", stats.toString({}));
  });
});


gulp.task('default', ['build-sass', 'build-docs-sass', 'build-src', 'build-docs', 'watch-sass', 'watch-docs-sass'])
