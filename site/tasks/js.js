const gulp = require("gulp");
const connect = require("gulp-connect");

function js(){
    return gulp
            .src("./src/js/*.js")
            .pipe(gulp.dest("./tmp/js"))
            .pipe(connect.reload());
}
function buildJS(){
    return gulp
            .src("./src/js/*.js")
            .pipe(gulp.dest("./dist/js"))
}

function watchJS(){
    return gulp
            .watch("./src/js/*.js", {
                ignoreInitial: false
            }, js);
}

module.exports = {
    watchJS,
    buildJS
}