var browserify       = require("browserify"),
    gulp             = require("gulp"),
    gulp_live_server = require("gulp-live-server"),
    gulp_sass        = require("gulp-sass");
    source           = require("vinyl-source-stream");

    gulp.task("browserify", function() {
      var browser = browserify();

      return browser.add("./app/modules/app.module.js")
      .bundle()
      .pipe(source("bundle.js"))
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
        .pipe(gulp_sass().on("error", gulp_sass.logError))
        .pipe(gulp.dest("dist/"));
    });

    gulp.task("serve", ["dist", "browserify"], function() {
      var server = gulp_live_server.static(["dist"]);
      server.start();
    });
