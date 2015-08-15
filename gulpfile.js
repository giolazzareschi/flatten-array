var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var minifyCss = require('gulp-minify-css');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('default', ['tpl' ,'sass', 'js']);

gulp.task('sass', function () {
    return sass('dev/css')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
    	.pipe(minifyCss({compatibility: 'ie8'}))
    	.pipe(concat('app.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('tpl', function(){
  gulp.src('dev/tpl/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MDL.templates',
      noRedeclare: true,
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('dev/js/tpl'));
});

gulp.task('js', function() {
  return gulp.src(['dev/js/*.js','dev/js/**/*.js'])
    //.pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch(['dev/tpl/*.hbs'], ['tpl']);
    gulp.watch(['dev/js/*.js','dev/js/**/*.js']);
    gulp.watch(['dev/css/*.scss'], ['sass']);
});