const gulp = require('gulp');

// css 
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

// js
const uglify = require('gulp-uglify');
const obfuscator = require('gulp-javascript-obfuscator')

// img 
const imagemin = require('gulp-imagemin')

function minifyJS() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscator())
        .pipe(gulp.dest('./dist/scripts'))
}

function compilaSass() {
    return gulp.src('./src/sass/main.sass')
        .pipe(sourcemaps.init())    
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css'))
}

function comprimeImages() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = function() {
    gulp.watch('./src/sass/*.sass', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.series(minifyJS))
    gulp.watch('./src/images/*.png', { ignoreInitial: false }, gulp.series(comprimeImages))
}
