var gulp = require('gulp'),
watch =  require('gulp-watch');

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
    console.log('do some css handling process.');
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