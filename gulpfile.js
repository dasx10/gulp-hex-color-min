const gulp = require('gulp');
const read = require('./')

function test(){
    return gulp.src('*.css')
    .pipe(read())
    .pipe(gulp.dest('./a'))
}

module.exports.test = test;