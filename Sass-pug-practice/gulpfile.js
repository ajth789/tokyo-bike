//Instructions here: https://css-tricks.com/gulp-for-beginners/
var gulp = require('gulp')

//Write gulp tasks as follows:
gulp.task('task-name', function() {
  // Stuff here
});

gulp.task('hello', function() {
  console.log('Hello Ash');
});


//Using Gulp to compile Sass:

var gulp = require('gulp');
  //Require gulp-sass plugin, which we have
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/sass/**/*.sass') //Gets all files ending with .sass in app/sass and children dirs
    .pipe(sass()) // Converts sass to css using gulp-sass
    .pipe(gulp.dest('app/css'))
    pipe(browsersync.reload({
      stream: true
    }))
});

var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function(){
  return gulp.src('app/*.pug') //Gets all files ending with .pug in app/sass and children dirs
    .pipe(pug()) // Converts sass to css using gulp-sass
    .pipe(gulp.dest('app'))
});
/*Gulp watch syntax
gulp.watch('files-to-watch', ['tasks', 'to', 'run']);*/

/* To watch on file at a time
gulp.watch('app/sass/...../*.sass', ['sass']);*/

//To watch multiple files
gulp.task('watch', ['browserSync', 'sass', 'pug'], function(){
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/*.pug', ['pug']);
  //gulp.watch('app/js/**/*.js', browserSync.reload);
  //Other watch tasks...
});


//Live reloading with browser-sync
var browsersync = require('browser-sync').create();

gulp.task('browserSync', function(){
  browsersync.init({
    server: {
      baseDir: 'app'
    },
  })
})
