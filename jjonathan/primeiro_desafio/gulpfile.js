var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pump = require('pump');
var stylish = require('jshint-stylish');

var options = {
	'pump'	: pump,
	'stylish' : stylish,
	'paths' : {
		'src' : {
			'js'	: './src/js/*',
			'img'	: './src/img/*',
			'css'	: './src/css/*',
		},
		'dist' : {
			'js'	: './js/',
			'img'	: './img/', 
			'css'	: './css/',
		}
	}
};

require('load-gulp-tasks')(gulp, options, plugins);