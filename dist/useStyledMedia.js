"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-line no-unused-vars
var _default = (breakpoint, minmax = 'min') => {
  if (!breakpoint) {
    throw new Error('Must provide a breakpoint');
  }

  const theme = (0, _react.useContext)(_styledComponents.ThemeContext); // eslint-disable-next-line no-undef

  const query = window.matchMedia(`(${minmax}-width: ${theme.breakpoints[breakpoint]}px)`);
  let matches = !query.matches;

  const handleChange = ({
    matches: isMatched
  }) => {
    matches = !isMatched;
  };

  (0, _react.useEffect)(() => {
    query.addListener(handleChange);
    return query.removeListener(handleChange);
  }, []);
  return matches;
};

exports.default = _default;