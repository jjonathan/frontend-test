module.exports = function (gulp, options, plugins) {
    gulp.task('default', [
        'scriptTask',
        'styleTask',
        'watchTask',
        'serverTask']);
};