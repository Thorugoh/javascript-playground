const gulp = require('gulp');

/*
    - top level functions
        - gulp.task - Define tasks
        - gulp.src - Point to files to use
        - gulp.dest - Point to folders to output
        - gulp.watch - Watch files for changes
*/

// Logs message
gulp.task('message', function(done) {
    console.log('Gulp is running...');
    done();
});

// Copy all HTML files
gulp.task('copyHtml', function(done) {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    done();
});