"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BreakpointContext = _interopRequireDefault(require("./BreakpointContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-line no-unused-vars
// eslint-disable-line no-unused-vars
var defaultBreakpoints = {
  xs: 600,
  sm: 900,
  md: 1200,
  lg: 1800,
  xl: 2200
};

var _default = function _default(_ref) {
  var _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? defaultBreakpoints : _ref$breakpoints,
      children = _ref.children;
  return _react["default"].createElement(_BreakpointContext["default"].Provider, {
    value: breakpoints
  }, children);
};

exports["default"] = _default;