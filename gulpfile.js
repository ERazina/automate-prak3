'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const mainBowerFiles = require('main-bower-files');
const clean = require('gulp-clean');


gulp.task('clean', function(done){
	gulp.src('./build/*', {read:false})
	.pipe(clean())
	done();
});

gulp.task('mainfiles', function(done){
gulp.src(mainBowerFiles({
	"overrides":{
		"bootstrap-sass":{
			"main":[
				"./assets/fonts/*.*", 
				"./assets/stylesheets/bootstrap",
				"./assets/stylesheets/_bootstrap.scss",
				"./assets/javascripts/bootstrap.min.js"
			]
		}, 

		"font-awesome":{
					"main":[
						"scss/*.*", 
						"fonts/*.*"
					]
				}, 


				"jquery":{
					"main":[
					"dist/jquery.min.js"
					]
				}
	}
}))
.pipe(gulp.dest('./build'))
	done();
})


gulp.task('js', function(done){
gulp.src(mainBowerFiles({
	"overrides":{
		"bootstrap-sass":{
			"main":[
				"./javascripts/bootstrap.min.js"

			]
		}, 


				"jquery":{
					"main":[
					"dist/jquery.min.js"
					]
				}
	}
}))
.pipe(gulp.dest('./build/js'))
	done();
})


gulp.task('fonts', function(done){
gulp.src(mainBowerFiles(["**/*.{otf, eot, svg, woff, woff2, ttf}"],{
	"overrides":{
		"bootstrap-sass":{
			"main":[
				"./assets/fonts/bootstrap/*.*"
			]
		}, 

		"font-awesome":{
					"main":[
						"scss/*.*", 
						"fonts/*.*"
					]
				}, 


				"jquery":{
					"main":[
					"dist/jquery.min.js"
					]
				}
	}
}))
.pipe(gulp.dest('./build/fonts'))
	done();
})




gulp.task('pug', function(done){
	gulp.src('src/index.pug')
	.pipe(pug({
		pretty:true
	}))
	.pipe(gulp.dest('./build'))
	done();
});

gulp.task('build', gulp.series('clean', 'pug', 'mainfiles', function(done){
	done();
}))