# gulp hex color minify

## install 

```
npm i -D gulp-hex-color-min
```

## use
```
const gulp = require('gulp');
const hexMin = require('gulp-hex-color-min')

function css(){
    return gulp.src('./*.css')
    .pipe(hexMin())
    .pipe(gulp.dest('./dist'))
}

module.exports.css = css;
```
## run
```
gulp css
```

## example
input
```
div{
    background: #220011;
    color: #333333;
    color: #332222;
    color: #112233;
    color: #FFAAAA;
    color: #ffAAbb;

    /* example no compress*/
    color: #123456;
    color: #12aa56;
    color: #11aa56;
    color: #12aa55;
}
```
output
```
div{
    background: #201;
    color: #333;
    color: #322;
    color: #123;
    color: #faa;
    color: #fab;

    /* example no compress*/
    color: #123456;
    color: #12aa56;
    color: #11aa56;
    color: #12aa55;
}
```