var browserify       = require("browserify"),
    gulp             = require("gulp"),
    live_server      = require("gulp-live-server"),
    sass             = require("gulp-sass"),
    uglify           = require("gulp-uglify"),
    buffer           = require("vinyl-buffer"),
    source           = require("vinyl-source-stream");

    gulp.task("browserify", function() {
      var browser = browserify();

      return browser.add("./app/modules/app.module.js")
      .bundle()
      .pipe(source("bundle.js"))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest("dist/js"));
    });

    gulp.task("dist", ["html", "sass"], function() {
    });

    gulp.task("html", function() {
      gulp.src(["app/index.html"])
        .pipe(gulp.dest("dist/"));

      gulp.src(["app/**/*.html"])
        .pipe(gulp.dest("dist/"));
    });

    gulp.task("sass", function () {
      return gulp.src("app/styles/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("dist/"));
    });

    gulp.task("serve", ["dist", "browserify"], function() {
      var server = live_server.static(["dist"]);
      server.start();
    });
