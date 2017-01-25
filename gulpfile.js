// gulpfile.js
var gulp   = require('gulp'),
    gutil  = require('gulp-util'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

var jsFiles = 'js/**/*.js',
    jsDest  = 'dist/scripts';


gulp.task('scripts', function() {
    
    return gulp.src(jsFiles)         // take our js files
        .pipe(concat('scripts.js'))  // merge them together
        .pipe(gulp.dest(jsDest))     // write out
        .pipe(rename('momntm.min.js'))
        .pipe(uglify().on('error', gutil.log))  // minify
        .pipe(gulp.dest(jsDest));    // write out
    
});