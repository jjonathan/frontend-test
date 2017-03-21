var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pump = require('pump');

var options = {
	'pump'	: pump,
	'paths' : {
		'src' : {
			'js'	: './src/js/*',
			'html'	: "./*.html"
		},
		'dist' : {
			'js'	: './js/',
		}
	}
};

require('load-gulp-tasks')(gulp, options, plugins);