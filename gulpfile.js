var gulp=require('gulp');
var myutil = require('gulp-util');
var gulp=require('gulp');
var cssmin = require('gulp-clean-css');
var minifyHtml = require('gulp-minify-html');
var uglify = require('gulp-uglify');


gulp.task('hello', function () {
console.log('hello');
});

gulp.task('myminifycss', function () {
gulp.src('css/*.css')
.pipe(cssmin())
.pipe(gulp.dest('xiangmu/css'));
});


gulp.task('myminifyhtml', function () {
gulp.src('*.html') // 要压缩的html文件
.pipe(minifyHtml()) //压缩
.pipe(gulp.dest('xiangmu/html'));
});

gulp.task('uglifyjs', function(){
gulp.src('js/*.js').pipe(uglify()).pipe(gulp.dest('xiangmu/js'))
});


gulp.task('default',['hello','myminifycss','myminifyhtml','uglifyjs']);