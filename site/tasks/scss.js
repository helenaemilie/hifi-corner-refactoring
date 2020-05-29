const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");

function scss(){
    return gulp
            .src("./src/scss/style.scss")
            .pipe(sass())
            .pipe(gulp.dest("./tmp/css"))
            .pipe(connect.reload());
}
function buildSCSS(){
    return gulp
            .src("./src/css/**/*.css")
            .pipe(sass())
            .pipe(gulp.dest("./dist/css"))
}

function watchSCSS(){
    return gulp
            .watch("./src/scss/**/*.scss", {
                ignoreInitial: false
            }, scss);
}

module.exports = {
    watchSCSS,
    buildSCSS
}