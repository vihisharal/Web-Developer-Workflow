var gulp = require('gulp'),
watch =  require('gulp-watch'),
postcss=require('gulp-postcss'),
autoprefixer=require('autoprefixer'),
cssvars=require('postcss-simple-vars'),
nested=require('postcss-nested'),
cssImport=require('postcss-import'),
browserSync=require('browser-sync').create();
// run : gulp
gulp.task('default', function () {
    console.log('created gulp task.');
});

// run : gulp myhtml 
gulp.task('myHtml', function () {
    console.log('do some html handling process.');
});

function swallowError (error) {
    // If you want details of the error in the console
    console.log(error.toString());
    this.emit('end');
  }

// run : gulp myhtml 
gulp.task('myCss', function () {

    return gulp.src('app/assets/styles/style.css')
    .pipe(postcss([cssImport,cssvars,nested,autoprefixer]))
    .on('error', swallowError)
    .pipe(gulp.dest('app/styles'));
});

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
    });
});

// use myCss task before cssInject run
gulp.task('cssInject',['myCss'],function(){
    return gulp.src('/app/assets/styles/style.css')
    .pipe(browserSync.stream());
});
// Video 04 > 12 apply