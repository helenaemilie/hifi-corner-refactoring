const gulp = require("gulp");
const connect = require("gulp-connect");


function image(){
    return gulp
            .src("./src/img/**/*")
            .pipe(gulp.dest("./tmp/img"))
            .pipe(connect.reload());
}
function buildIMAGE(){
    return gulp
            .src("./src/img/**/*")
            .pipe(gulp.dest("./dist/img"))
}

function watchIMAGE(){
    return gulp
            .watch("./src/img/**/*", {
                ignoreInitial: false
            }, image);
}

module.exports = {
    watchIMAGE,
    buildIMAGE
}