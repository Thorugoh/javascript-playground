import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
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

// Optimize Images
gulp.task('imageMin', function(done) {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
    done();
});

// Copy all HTML files
gulp.task('copyHtml', function(done) {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    done();
});