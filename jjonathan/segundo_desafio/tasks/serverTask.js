module.exports = function(gulp, options, plugins){
	gulp.task('serverTask',function(){
		var server = plugins.liveServer.static('./', 8080);
		server.start();
		gulp.watch(options.paths.dist.html + '*.html', function(file){
			plugins.liveServer.notify.apply(server, [file]);
		});
		gulp.watch(options.paths.dist.img + '*', function(file){
			plugins.liveServer.notify.apply(server, [file]);
		});
		gulp.watch(options.paths.dist.js + '**/*.js', function(file){
			plugins.liveServer.notify.apply(server, [file]);
		});
		gulp.watch(options.paths.dist.css + '**/*.css', function(file){
			plugins.liveServer.notify.apply(server, [file]);
		});
	});
}