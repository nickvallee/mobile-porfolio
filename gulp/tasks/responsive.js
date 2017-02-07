var gulp = require('gulp'),
responsive = require('gulp-responsive');

gulp.task('responsive', function () {
  return gulp.src('./app/assets/views/images/*.{png,jpg}')
    .pipe(responsive({
      '*.png': {
        width: '100%',
        quality: 50,
        compressionLevel: 6,
        progressive: true,
        withMetadata: false,
        rename: { suffix: '-web' }
      },
      '*.jpg': {
        width: '100%',
        format: 'png',
        rename: {
          suffix: '-web',
          extname: '.png'
      }
    }
    }))
    .pipe(gulp.dest('./app/assets/views/images/'));
});