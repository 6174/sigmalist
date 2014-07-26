var gulp = require('gulp'),
	less = require('gulp-less');
    // watch = require('gulp-watch');


// gulp.task('lessc', function () {
// 	console.log('start lessc:');
//     return ;
// });

console.log('I am restarted');
gulp.src(['less/*.less'])
	.pipe(less())    		
    .pipe(gulp.dest('css/'));

// gulp.task('default', ['lessc']);