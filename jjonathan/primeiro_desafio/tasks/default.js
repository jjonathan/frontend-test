module.exports = function (gulp, options, plugins) {
    gulp.task('default', [
    	'imgTask',
        'styleTask',
        'svgTask',
        'watchTask',
        'serverTask']);
};