var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pump = require('pump');

var options = {
	'pump'	: pump,
	'paths' : {
		'src' : {
			'js'	: './src/js/*',
			'img'	: './src/img/*',
			'scss'	: './src/scss/*',
			'html'	: './*.html'
		},
		'dist' : {
			'js'	: './js/',
			'img'	: './img/', 
			'css'	: './css/',
		},
		'main' : {
			'scss'	: '.src/scss/main.scss'
		}
	}
};

require('load-gulp-tasks')(gulp, options, plugins);