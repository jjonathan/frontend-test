module.exports = function(gulp, options, plugins){

	gulp.task('watchTask', function(){
		gulp.watch(options.paths.src.html, ['']);
		gulp.watch(options.paths.src.js, ['scriptTask']);
	});
}