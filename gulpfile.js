var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    pump = require('pump'),
    rename = require('gulp-rename');

gulp.task('styles', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/js'));
});

// gulp.task('compress', function (cb) {
//   pump([
//         gulp.src('app/js/script.js'),
//         uglify(),
//         gulp.dest('app/js')
//     ],
//     cb
//   );
// });
