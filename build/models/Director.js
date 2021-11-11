"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var directorSchema = new _mongoose.Schema({
  name: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Director", directorSchema);

exports["default"] = _default;