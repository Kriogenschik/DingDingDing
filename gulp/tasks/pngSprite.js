const gulp = require('gulp');
const gulpif = require("gulp-if");
const spritesmith = require('gulp.spritesmith');
const merge = require('merge-stream');

module.exports = function pngSprite() {
    const spriteData = gulp
        .src('src/img/sprite/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite-png.scss',
            imgPath: '../../img/sprite/sprite.png',
            algorithm: 'binary-tree',
            cssTemplate: 'scss.template.mustache',
            padding: 5,
        }));
    const imgStream = spriteData.img.pipe(gulp.dest('build/img/sprite/'));
    const cssStream = spriteData.css.pipe(gulp.dest('src/styles/common/'));
    return merge(imgStream, cssStream);
};