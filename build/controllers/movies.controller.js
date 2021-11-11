"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMovie = exports.getProductionCompanies = exports.getMoviesAlphabetical = exports.getMovies = exports.getMovieByID = exports.deleteMovie = exports.createMovie = void 0;

var _Movie = _interopRequireDefault(require("../models/Movie"));

var _Director = _interopRequireDefault(require("../models/Director"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createMovie = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, genre, director, releaseDate, productionCompanies, newMovie, newDirector, movieSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, genre = _req$body.genre, director = _req$body.director, releaseDate = _req$body.releaseDate, productionCompanies = _req$body.productionCompanies;
            newMovie = new _Movie["default"]({
              name: name,
              genre: genre,
              director: director,
              releaseDate: releaseDate,
              productionCompanies: productionCompanies
            });
            newDirector = new _Director["default"]({
              name: director
            });
            _context.next = 5;
            return newDirector.save();

          case 5:
            _context.next = 7;
            return newMovie.save();

          case 7:
            movieSaved = _context.sent;
            res.status(201).json(movieSaved);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createMovie(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createMovie = createMovie;

var getMovies = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var Movies;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Movie["default"].find();

          case 2:
            Movies = _context2.sent;
            res.json(Movies);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMovies(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMovies = getMovies;

var getMoviesAlphabetical = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var Movies, AlphabeticalMovies;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Movie["default"].find();

          case 2:
            Movies = _context3.sent;
            AlphabeticalMovies = Movies.sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }

              if (a.name > b.name) {
                return 1;
              }

              return 0;
            });
            res.json(AlphabeticalMovies);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getMoviesAlphabetical(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMoviesAlphabetical = getMoviesAlphabetical;

var getMovieByID = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var movie;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Movie["default"].findById(req.params.movieId);

          case 2:
            movie = _context4.sent;
            res.status(200).json(movie);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getMovieByID(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getMovieByID = getMovieByID;

var getProductionCompanies = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var movie;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Movie["default"].findById(req.params.movieId);

          case 2:
            movie = _context5.sent;
            res.status(200).json(movie.productionCompanies);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getProductionCompanies(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getProductionCompanies = getProductionCompanies;

var updateMovie = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var updatedMovie;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Movie["default"].findByIdAndUpdate(req.params.movieId, req.body, {
              "new": true
            });

          case 2:
            updatedMovie = _context6.sent;
            res.status(204).json(updatedMovie);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateMovie(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateMovie = updateMovie;

var deleteMovie = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _Movie["default"].findByIdAndDelete(req.params.movieId);

          case 2:
            res.status(204).json();

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function deleteMovie(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteMovie = deleteMovie;