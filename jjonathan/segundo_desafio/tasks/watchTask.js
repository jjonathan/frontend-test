module.exports = function(gulp, options, plugins){

	gulp.task('watchTask', function(){
		gulp.watch(options.paths.src.html, ['styleTask']);
		gulp.watch(options.paths.src.js, ['scriptTask']);
		gulp.watch(options.paths.src.scss, ['styleTask']);
	});
}