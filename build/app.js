"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _movies = _interopRequireDefault(require("./routes/movies.routes"));

var _tvshows = _interopRequireDefault(require("./routes/tvshows.routes"));

var _directors = _interopRequireDefault(require("./routes/directors.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.send("Nubceo - Node.js Technical Test");
});
app.use("/movies", _movies["default"]);
app.use("/tvshows", _tvshows["default"]);
app.use("/directors", _directors["default"]);
app.use("/auth", _auth["default"]);
app.use("/users", _user["default"]);
var _default = app;
exports["default"] = _default;