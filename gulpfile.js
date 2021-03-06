var gulp = require('gulp'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    assign = require('lodash.assign'),
    babelify = require('babelify'),
    //stylus = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    del = require('del'),
    browserSync = require('browser-sync'),
    csscomb = require('gulp-csscomb');
    plumber = require('gulp-plumber');

/*
  Babel/React/Browserify/Watchify Compilation
*/

// add custom browserify options here
var customOpts = {
  entries: ['./public/js/main.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts)); 
    b.transform(babelify.configure({
      presets: ['es2015', 'react', 'stage-1']
       // Decorator support for Radium
    }));

gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./public/dist'))
}


// gulp.task('stylus', function () {
//   return gulp.src('./src/stylus/app.styl')
//     .pipe(plumber())
//     .pipe(stylus({
//       use: [autoprefixer('iOS >= 7', 'last 1 Chrome version')]
//     }))
//     .pipe(plumber.stop())
//     // log errors if they happen
//     .pipe(gulp.dest('./dist/css'))
//     .pipe(browserSync.stream());
// });

gulp.task('html', function () {
  return gulp.src('./public/index.html')
    .pipe(gulp.dest('./public/dist/'))
});


gulp.task('styles', function() {
  return gulp.src('public/styles.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('watch', function() {
  //gulp.watch('src/stylus/**/*.styl', ['stylus']);
  gulp.watch('public/index.html', ['html']);
  gulp.watch('public/dist/index.html').on('change', browserSync.reload);
  gulp.watch('public/dist/bundle.js').on('change', browserSync.reload);
});

gulp.task('serve', function() {
  browserSync({
    server: {
        baseDir: "./public/dist"
    }
  });
});

gulp.task('clean', function() {
  return del('dist');
})

gulp.task('default', ['html', 'js', 'watch', 'serve']);