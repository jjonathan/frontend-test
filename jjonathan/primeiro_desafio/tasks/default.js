module.exports = function (gulp, options, plugins) {
    gulp.task('default', [
    	'imgTask',
        'scriptTask',
        'styleTask',
        'svgTask',
        'watchTask',
        'serverTask']);
};