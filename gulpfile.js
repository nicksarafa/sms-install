// =============================================================================
// GULPFILE.JS
// =============================================================================

// Initialize gulp 
// -----------------------------------------------------------------------------

var gulp = require('gulp'),
    haml = require('gulp-ruby-haml'),
    sass = require('gulp-sass');

// Compile src/*.scss to build/*.css
// -----------------------------------------------------------------------------

gulp.task('sass', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css/.'));
});
 
// Compile src/*.haml to build/*.html
// -----------------------------------------------------------------------------

gulp.task('haml', function() {
  return gulp.src(['src/*.haml'])
    .pipe(haml())
    .pipe(gulp.dest('build/.'));
});

// Compile sass, and haml, inline styles and dispatch new test to Litmus 
// -----------------------------------------------------------------------------

gulp.task('build', ['sass', 'haml'], function() {
  return gulp.src(['build/*.html'])
    .pipe(gulp.dest('build/.'));
});

// Automatically compile stylesheet(s) and haml
// -----------------------------------------------------------------------------

gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', ['build']);
    gulp.watch('src/*.haml', ['build']);
});
