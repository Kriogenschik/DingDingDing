const gulp = require('gulp');

module.exports = function styleLibs() {
	return gulp.src('src/styles/libs/*.css')
		.pipe(gulp.dest('build/css/libs'))
};