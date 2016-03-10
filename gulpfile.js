// --
// gulp
// --

var gulp                = require('gulp');
var shell               = require('gulp-shell');
var browserSync         = require('browser-sync').create();

// styles
var sass                = require('gulp-sass');
var autoprefixer        = require('gulp-autoprefixer');

// misc
var plumber             = require('gulp-plumber');
var browserSync         = require('browser-sync');


// Command line for jekyll

    gulp.task('build', shell.task(['jekyll build --watch']));
    //gulp.task('build', shell.task(['bundle exec jekyll build --watch']));


// Task for serving with Browsersync

    gulp.task('serve', function () {
        browserSync.init({server: {baseDir: '_site/'}});
        gulp.watch(['_site/**/*.*', '!_site/**/index.html', '!_site/**/*.scss', '!_site/**/*.css']).on('change', browserSync.reload);
    });


// Sassy

    gulp.task('sass', function() {
        gulp.src('scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 15 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('_site/styles'))
            .pipe(browserSync.stream())
    });


// Watch

gulp.task('watch', function() {

    gulp.watch('scss/**/*', ['sass']);

    browserSync({
        proxy: "help.plot.ly.dev",   // Set this to whatever you want and then point it to /_site (in mamp or your favorite method)
        files: ["_site/*.html"]

    });

});


gulp.task('bw', ['build', 'sass', 'watch']);

gulp.task('default', ['sass', 'watch']);

gulp.task('build', ['build']);

