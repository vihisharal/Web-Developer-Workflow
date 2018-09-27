var gulp = require('gulp'),
watch =  require('gulp-watch'),
browserSync=require('browser-sync').create();

// run : gulp mywatch 
gulp.task('mywatch', function () {

    // refresh browser if changes ocuure 
    // check open in two browerser scroll in one scroll happen in other also 
    browserSync.init({
        notiy :false,
        server:{
            baseDir: "app"
        }
    });

    // refresh if changes ocuure in index.html
    watch('app/index.html',function(){
        //gulp.start('myHtml');
        browserSync.reload();
    });

    // refresh if changes ocuure in any css in mention dir 
    watch('app/assets/styles/**/*.css',function(){
        //gulp.start('myCss');
        gulp.start('cssInject');
        browserSync.reload();
    });
});
// use myCss task before cssInject run
gulp.task('cssInject',['myCss'],function(){
    return gulp.src('/app/assets/styles/style.css')
    .pipe(browserSync.stream());
});