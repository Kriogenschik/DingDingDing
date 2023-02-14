const gulp = require("gulp");
var sass = require('gulp-dart-sass');
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require('gulp-sourcemaps');



module.exports = function style(){
    return gulp.src("src/styles/pages/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: true,
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css/pages'))
};