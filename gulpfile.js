var { task, src, dest, series, watch } = require('gulp');
var sass = require('gulp-dart-sass');
var autoprefixer = require('gulp-autoprefixer');

// 一次性编译 Sass
task('sass', function () {
    return src('./source/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer())
        .pipe(dest('./source/css'));
});

// 实时编译
task('default', series('sass'), function () {
    watch('./source/scss/_partial/*.scss', ['sass']);
    watch('./source/scss/*.scss', ['sass']);
});