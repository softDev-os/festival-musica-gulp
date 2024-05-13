const { src, dest, watch } = require("gulp");

// css
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");

function css(done) {
  // TODO: Identificar el archivo .scss y compilarlo con gulp y destinarlo

  src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass()) // Compilarlo
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/css"));

  done(); // NOTE: Callback que avisa a gulp cuando termina
}

function dev(done) {
  watch("src/scss/**/*.scss"), css;
  done();
}

exports.css = css;
exports.dev = dev;
