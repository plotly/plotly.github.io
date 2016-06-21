// --
// gulp
// --

var gulp                = require('gulp');
var shell               = require('gulp-shell');

// styles
var sass                = require('gulp-sass');
var autoprefixer        = require('gulp-autoprefixer');

// misc
var plumber             = require('gulp-plumber');
var browserSync         = require('browser-sync');
var hashsum = require("gulp-hashsum");

var runSequence = require('run-sequence');


// Command line for jekyll

    gulp.task('build', shell.task(['jekyll build']));
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

// Version Sass

gulp.task('sass_cache', function () {
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./styles'))
        .pipe(hashsum({filename: './_data/cache_bust_css.yml', hash: 'md5'}))
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

gulp.task('deploy', runSequence('build', 'sass_cache'));
