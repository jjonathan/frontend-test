module.exports = function(gulp, options, plugins){
	gulp.task('svgTask', function(cb){
		options.pump([
			gulp.src(options.paths.src.svg),
			plugins.svgmin(),
			gulp.dest(options.paths.dist.svg)
			], cb);
	});
};