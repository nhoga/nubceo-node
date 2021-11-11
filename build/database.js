"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("mongodb://localhost/nubceo-node", {
  useUnifiedTopology: true
}).then(function (db) {
  return console.log("Database is connected");
})["catch"](function (error) {
  return console.log(error);
});