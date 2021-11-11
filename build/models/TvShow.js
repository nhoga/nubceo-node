"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var tvShowSchema = new _mongoose.Schema({
  name: String,
  genre: Array,
  director: String,
  releaseDate: Date,
  episodes: Array
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("TvShow", tvShowSchema);

exports["default"] = _default;