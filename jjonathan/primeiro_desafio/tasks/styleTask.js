module.exports = function(gulp, options, plugins){
	gulp.task('styleTask', function(cb){
		options.pump([
			gulp.src(options.paths.src.scss),
			plugins.order([
				'fonts.scss',
				'base.scss',
				'*.scss'
			]),
			plugins.concat('style.min.scss'),
			plugins.sass(),
			plugins.autoprefixer(),
			plugins.cssmin(),
			gulp.dest(options.paths.dist.css)
			], cb);
	});
};