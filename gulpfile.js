var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var notifier = require('node-notifier');
var compass = require('gulp-compass');
var rename = require('gulp-rename');
var cleanCss = require('gulp-clean-css');

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
  gulp.watch(['src/sass/*.scss', 'src/sass/**/*.scss']);
});

gulp.task('build-docs', function() {
  var config = require('./docs-src/webpack.config.js');
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

  gulp.src('dist/css/**/*.css').pipe(gulp.dest('docs/css'));
});


gulp.task('default', ['build-sass', 'build-docs'])
