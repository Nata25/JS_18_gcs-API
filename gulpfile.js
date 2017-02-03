var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');

gulp.task('styles', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('docs/css'));
});

gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('docs/js'));
});

gulp.task('title', function () {
    return gulp.src('src/js/title.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('docs/js'));
});

gulp.task('watch', function() {
    gulp.watch('src/css/*.css', ['styles']);
    gulp.watch('src/js/*.js', ['scripts', 'title']);
});
