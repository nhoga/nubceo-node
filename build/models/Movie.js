"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var movieSchema = new _mongoose.Schema({
  name: String,
  genre: Array,
  director: String,
  releaseDate: Date,
  productionCompanies: Array
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Movie", movieSchema);

exports["default"] = _default;