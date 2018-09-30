var gulp = require('gulp'),
webpack=require('webpack');

gulp.task('scripts',function(callback){
    return webpack(require('../../webpack.config.js'),function(error,stats){
        if(error){
            console.log(error.toString());
        }
        console.log(stats.toString());
        callback();
    });
});