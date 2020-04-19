"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BreakpointContext = _interopRequireDefault(require("./BreakpointContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(breakpoint) {
  var minmax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'min';

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      matches = _useState2[0],
      setMatch = _useState2[1];

  var breakpoints = (0, _react.useContext)(_BreakpointContext["default"]);

  if (!breakpoint || !breakpoints[breakpoint]) {
    throw new Error('useStyledMedia: breakpoint argument is missing or invalid.');
  } // Memoize the query so that the useEffect on line 27
  // doesn't continually re-render.


  var query = (0, _react.useMemo)(function () {
    return window.matchMedia("(".concat(minmax, "-width: ").concat(breakpoints[breakpoint] - (minmax === 'max' ? 1 : 0), "px)"));
  }, [breakpoint, minmax]); // Callback to set the matched state.

  var handleChange = function handleChange(_ref) {
    var isMatched = _ref.matches;
    return setMatch(!isMatched);
  }; // Initialize query listener


  (0, _react.useEffect)(function () {
    query.addListener(handleChange);
    return function () {
      return query.removeListener(handleChange);
    };
  }, [query]); // Check initial matched state.

  (0, _react.useEffect)(function () {
    return setMatch(!query.matches);
  }, []);
  return matches;
};

exports["default"] = _default;