const gulp = require('gulp');
const svgmin = require('gulp-svgmin')

module.exports = function imagesSvg() {
    return gulp.src('src/img/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('build/img'))
};