var gulp = require('gulp'),
responsive = require('gulp-responsive');

gulp.task('responsive', function () {
  return gulp.src('./app/assets/img/*.{png,jpg}')
    .pipe(responsive({
      '*.png': {
        width: '100%',
        quality: 20,
        compressionLevel: 6,
        progressive: true,
      withMetadata: false,
        rename: { suffix: '-web' }
      }
    }))
    .pipe(gulp.dest('./app/assets/img/'));
});