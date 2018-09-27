var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');

// run : gulp myhtml 
gulp.task('myCss', function () {

    return gulp.src('app/assets/styles/style.css')
        .pipe(postcss([cssImport, mixins ,cssvars, nested, autoprefixer]))
        .on('error', function(e){
            // If you want details of the error in the console
            console.log(e.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('app/styles'));
});
