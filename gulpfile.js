const gulp = require("gulp");
const connect = require("gulp-connect");
const {watchHTML, buildHTML} = require("./tasks/html");
const {watchSCSS, buildSCSS} = require("./tasks/scss");
const {watchIMAGE, buildIMAGE} = require("./tasks/images");
const {watchJS, buildJS} = require("./tasks/js");



gulp.task("dev", function(done){
    watchHTML();
    watchSCSS();
    watchIMAGE();
    watchJS();
    connect.server({
        livereload: true,
        port: 3000,
        root: "tmp"
    })
    done();
});

gulp.task("build", function(done){
    buildHTML();
    buildSCSS();
    buildIMAGE();
    buildJS();
    done();
});