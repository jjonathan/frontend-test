module.exports = function(gulp, options, plugins){

	gulp.task('imgTask', function(cb){
		options.pump([
			gulp.src(options.paths.src.img),
			plugins.imagemin(),
			gulp.dest(options.paths.dist.img)
			],cb);
	});
}