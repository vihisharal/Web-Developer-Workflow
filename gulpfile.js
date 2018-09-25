var gulp = require('gulp'),
watch =  require('gulp-watch'),
postcss=require('gulp-postcss'),
autoprefixer=require('autoprefixer'),
cssvars=require('postcss-simple-vars'),
nested=require('postcss-nested');
// run : gulp
gulp.task('default', function () {
    console.log('created gulp task.');
});

// run : gulp myhtml 
gulp.task('myHtml', function () {
    console.log('do some html handling process.');
});

// run : gulp myhtml 
gulp.task('myCss', function () {
    return gulp.src('app/assets/styles/style.css')
    .pipe(postcss([cssvars,nested, autoprefixer]))
    .pipe(gulp.dest('app/styles'));
});

// run : gulp mywatch 
gulp.task('mywatch', function () {
    watch('app/index.html',function(){
        gulp.start('myHtml');
    });
    watch('app/assets/styles/**/*.css',function(){
        gulp.start('myCss');
    });
});

// Video 04 > 12 apply