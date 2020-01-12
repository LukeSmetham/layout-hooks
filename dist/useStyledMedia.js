"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-line no-unused-vars
var _default = function _default(breakpoint) {
  var minmax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'min';

  if (!breakpoint) {
    throw new Error('Must provide a breakpoint');
  }

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext); // eslint-disable-next-line no-undef

  var query = window.matchMedia("(".concat(minmax, "-width: ").concat(theme.breakpoints[breakpoint], "px)"));
  var matches = !query.matches;

  var handleChange = function handleChange(_ref) {
    var isMatched = _ref.matches;
    matches = !isMatched;
  };

  (0, _react.useEffect)(function () {
    query.addListener(handleChange);
    return query.removeListener(handleChange);
  }, []);
  return matches;
};

exports["default"] = _default;