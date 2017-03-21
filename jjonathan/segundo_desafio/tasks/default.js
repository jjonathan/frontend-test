module.exports = function (gulp, options, plugins) {
    gulp.task('default', [
        'scriptTask',
        'watchTask',
        'serverTask']);
};