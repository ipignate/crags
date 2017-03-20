var gulp = require('gulp');
var jade = require('gulp-jade');
var watch = require('gulp-watch');

gulp.task('account', function(){
  return gulp.src('public/app/account/*.jade')
    .pipe(watch('public/app/account/*.jade'))
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('public/app/account/'))
});
gulp.task('admin', function(){
  return gulp.src('public/app/admin/*.jade')
    .pipe(watch('public/app/admin/*.jade'))
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('public/app/admin/'))
});
gulp.task('main', function(){
  return gulp.src('public/app/main/*.jade')
    .pipe(watch('public/app/main/*.jade'))
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('public/app/main/'))
});
gulp.task('crags', function(){
  return gulp.src('public/app/crags/*.jade')
    .pipe(watch('public/app/crags/*.jade'))
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('public/app/crags/'))
});
gulp.task('views', function(){
  return gulp.src('server/views/*.jade')
    .pipe(watch('server/views/*.jade'))
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('server/views/'))
});
gulp.task('includes', function(){
  return gulp.src('server/includes/*.jade')
    .pipe(watch('server/includes/*.jade'))
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('server/includes/'))
});
gulp.task('default', ['account','admin','main','crags','views','includes']);
          