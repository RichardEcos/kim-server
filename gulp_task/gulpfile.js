const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('build', () => {
  gulp.src('./../lib/**/*.js')
  .pipe(gulp.dest('../build'));
});

gulp.task('lint', () => {
  gulp.src(['./**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['build', 'lint']);
