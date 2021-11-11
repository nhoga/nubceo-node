"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTvShows = exports.getTvShows = exports.getTvShowByID = exports.getEpisode = exports.deleteTvShows = exports.createTvShow = void 0;

var _TvShow = _interopRequireDefault(require("../models/TvShow"));

var _Director = _interopRequireDefault(require("../models/Director"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTvShow = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, genre, director, releaseDate, episodes, newTvShow, newDirector, tvShowSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, genre = _req$body.genre, director = _req$body.director, releaseDate = _req$body.releaseDate, episodes = _req$body.episodes;
            newTvShow = new _TvShow["default"]({
              name: name,
              genre: genre,
              director: director,
              releaseDate: releaseDate,
              episodes: episodes
            });
            newDirector = new _Director["default"]({
              name: director
            });
            _context.next = 5;
            return newDirector.save();

          case 5:
            _context.next = 7;
            return newTvShow.save();

          case 7:
            tvShowSaved = _context.sent;
            res.status(201).json(tvShowSaved);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createTvShow(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTvShow = createTvShow;

var getTvShows = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var tvShows;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _TvShow["default"].find();

          case 2:
            tvShows = _context2.sent;
            res.json(tvShows);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTvShows(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTvShows = getTvShows;

var getTvShowByID = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var tvshow;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _TvShow["default"].findById(req.params.tvshowId);

          case 2:
            tvshow = _context3.sent;
            res.status(200).json(tvshow);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getTvShowByID(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getTvShowByID = getTvShowByID;

var getEpisode = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var tvshow;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _TvShow["default"].findById(req.params.tvshowId);

          case 2:
            tvshow = _context4.sent;
            res.status(200).json(tvshow.episodes);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getEpisode(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getEpisode = getEpisode;

var updateTvShows = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var updatedTvShow;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _TvShow["default"].findByIdAndUpdate(req.params.tvshowId, req.body, {
              "new": true
            });

          case 2:
            updatedTvShow = _context5.sent;
            res.status(204).json(updatedTvShow);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateTvShows(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateTvShows = updateTvShows;

var deleteTvShows = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _TvShow["default"].findByIdAndDelete(req.params.tvshowId);

          case 2:
            res.status(204).json();

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteTvShows(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteTvShows = deleteTvShows;