const gulp = require('gulp');
const hexMin = require('gulp-hex-color-min')

function css(){
    return gulp.src('./*.css')
    .pipe(hexMin())
    .pipe(gulp.dest('./a'))
}

module.exports.css = css;