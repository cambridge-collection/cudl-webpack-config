"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rules = rules;
exports.rule = rule;
exports.env = env;

var _identity = _interopRequireDefault(require("lodash/identity"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _webpackConfig = require("webpack-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Return a function which creates a Config with the specified array of
 * rules when called.
 *
 * If a customiser function is provided, it's invoked when returned function is
 * invoked, with the defaultRules array as the first argument followed by any
 * args the returned function is invoked with. It should return an array of
 * rules which will be used in the resulting Config.
 */
function rules(defaultRules) {
  var customiser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity.default;
  return function () {
    if (!(0, _isArray.default)(defaultRules)) throw new Error("first argument must be an array, got: ".concat(defaultRules));

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var loaders = customiser.apply(void 0, [defaultRules].concat(args));
    return new _webpackConfig.Config().merge({
      module: {
        rules: loaders
      }
    });
  };
}
/**
 * As rules(), except the function itself and the customiser take a single
 * rule object, not an array of rules.
 */


function rule(defaultRule) {
  var customiser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity.default;
  return rules([defaultRule], function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        defaultRule = _ref2[0];

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return [customiser.apply(void 0, [defaultRule].concat(args))];
  });
}
/**
 * If value is a function, return the result of executing it, otherwise return
 * the value as is.
 */


function resolve(value) {
  if (typeof value === 'function') {
    return value.call();
  }

  return value;
}
/**
 * Lookup a value from the default webpack-config environment.
 */


function env(key) {
  var env = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _webpackConfig.environment;
  return resolve(env.get(key));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbInJ1bGVzIiwiZGVmYXVsdFJ1bGVzIiwiY3VzdG9taXNlciIsImlkZW50aXR5IiwiRXJyb3IiLCJhcmdzIiwibG9hZGVycyIsIkNvbmZpZyIsIm1lcmdlIiwibW9kdWxlIiwicnVsZSIsImRlZmF1bHRSdWxlIiwicmVzb2x2ZSIsInZhbHVlIiwiY2FsbCIsImVudiIsImtleSIsImVudmlyb25tZW50IiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQVNBLEtBQVQsQ0FBZUMsWUFBZixFQUFvRDtBQUFBLE1BQXZCQyxVQUF1Qix1RUFBVkMsaUJBQVU7QUFDdkQsU0FBTyxZQUFhO0FBQ2hCLFFBQUcsQ0FBQyxzQkFBUUYsWUFBUixDQUFKLEVBQ0ksTUFBTSxJQUFJRyxLQUFKLGlEQUN1Q0gsWUFEdkMsRUFBTjs7QUFGWSxzQ0FBVEksSUFBUztBQUFUQSxNQUFBQSxJQUFTO0FBQUE7O0FBS2hCLFFBQUlDLE9BQU8sR0FBR0osVUFBVSxNQUFWLFVBQVdELFlBQVgsU0FBNEJJLElBQTVCLEVBQWQ7QUFFQSxXQUFPLElBQUlFLHFCQUFKLEdBQWFDLEtBQWIsQ0FBbUI7QUFDdEJDLE1BQUFBLE1BQU0sRUFBRTtBQUNKVCxRQUFBQSxLQUFLLEVBQUVNO0FBREg7QUFEYyxLQUFuQixDQUFQO0FBS0gsR0FaRDtBQWFIO0FBRUQ7Ozs7OztBQUlPLFNBQVNJLElBQVQsQ0FBY0MsV0FBZCxFQUFrRDtBQUFBLE1BQXZCVCxVQUF1Qix1RUFBVkMsaUJBQVU7QUFDckQsU0FBT0gsS0FBSyxDQUFDLENBQUNXLFdBQUQsQ0FBRCxFQUFnQixnQkFBNEI7QUFBQTtBQUFBLFFBQTFCQSxXQUEwQjs7QUFBQSx1Q0FBVE4sSUFBUztBQUFUQSxNQUFBQSxJQUFTO0FBQUE7O0FBQ3BELFdBQU8sQ0FBQ0gsVUFBVSxNQUFWLFVBQVdTLFdBQVgsU0FBMkJOLElBQTNCLEVBQUQsQ0FBUDtBQUNILEdBRlcsQ0FBWjtBQUdIO0FBRUQ7Ozs7OztBQUlBLFNBQVNPLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3BCLE1BQUcsT0FBT0EsS0FBUCxLQUFpQixVQUFwQixFQUFnQztBQUM1QixXQUFPQSxLQUFLLENBQUNDLElBQU4sRUFBUDtBQUNIOztBQUNELFNBQU9ELEtBQVA7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNFLEdBQVQsQ0FBYUMsR0FBYixFQUFtQztBQUFBLE1BQWpCRCxHQUFpQix1RUFBYkUsMEJBQWE7QUFDdEMsU0FBT0wsT0FBTyxDQUFDRyxHQUFHLENBQUNHLEdBQUosQ0FBUUYsR0FBUixDQUFELENBQWQ7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpZGVudGl0eSBmcm9tICdsb2Rhc2gvaWRlbnRpdHknO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuXG5pbXBvcnQgeyBDb25maWcsIGVudmlyb25tZW50IH0gZnJvbSAnd2VicGFjay1jb25maWcnO1xuXG4vKipcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBDb25maWcgd2l0aCB0aGUgc3BlY2lmaWVkIGFycmF5IG9mXG4gKiBydWxlcyB3aGVuIGNhbGxlZC5cbiAqXG4gKiBJZiBhIGN1c3RvbWlzZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIGl0J3MgaW52b2tlZCB3aGVuIHJldHVybmVkIGZ1bmN0aW9uIGlzXG4gKiBpbnZva2VkLCB3aXRoIHRoZSBkZWZhdWx0UnVsZXMgYXJyYXkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGZvbGxvd2VkIGJ5IGFueVxuICogYXJncyB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoLiBJdCBzaG91bGQgcmV0dXJuIGFuIGFycmF5IG9mXG4gKiBydWxlcyB3aGljaCB3aWxsIGJlIHVzZWQgaW4gdGhlIHJlc3VsdGluZyBDb25maWcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydWxlcyhkZWZhdWx0UnVsZXMsIGN1c3RvbWlzZXIgPSBpZGVudGl0eSkge1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBpZighaXNBcnJheShkZWZhdWx0UnVsZXMpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5LCBnb3Q6ICR7ZGVmYXVsdFJ1bGVzfWApO1xuXG4gICAgICAgIGxldCBsb2FkZXJzID0gY3VzdG9taXNlcihkZWZhdWx0UnVsZXMsIC4uLmFyZ3MpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ29uZmlnKCkubWVyZ2Uoe1xuICAgICAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICAgICAgcnVsZXM6IGxvYWRlcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFzIHJ1bGVzKCksIGV4Y2VwdCB0aGUgZnVuY3Rpb24gaXRzZWxmIGFuZCB0aGUgY3VzdG9taXNlciB0YWtlIGEgc2luZ2xlXG4gKiBydWxlIG9iamVjdCwgbm90IGFuIGFycmF5IG9mIHJ1bGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVsZShkZWZhdWx0UnVsZSwgY3VzdG9taXNlciA9IGlkZW50aXR5KSB7XG4gICAgcmV0dXJuIHJ1bGVzKFtkZWZhdWx0UnVsZV0sIChbZGVmYXVsdFJ1bGVdLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIHJldHVybiBbY3VzdG9taXNlcihkZWZhdWx0UnVsZSwgLi4uYXJncyldO1xuICAgIH0pXG59XG5cbi8qKlxuICogSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgcmV0dXJuIHRoZSByZXN1bHQgb2YgZXhlY3V0aW5nIGl0LCBvdGhlcndpc2UgcmV0dXJuXG4gKiB0aGUgdmFsdWUgYXMgaXMuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGwoKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIExvb2t1cCBhIHZhbHVlIGZyb20gdGhlIGRlZmF1bHQgd2VicGFjay1jb25maWcgZW52aXJvbm1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnYoa2V5LCBlbnY9ZW52aXJvbm1lbnQpIHtcbiAgICByZXR1cm4gcmVzb2x2ZShlbnYuZ2V0KGtleSkpO1xufVxuIl19