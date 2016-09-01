'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.loaders = loaders;
exports.loader = loader;
exports.env = env;

var _identity = require('lodash/identity');

var _identity2 = _interopRequireDefault(_identity);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _webpackConfig = require('webpack-config');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return a function which creates a WebpackConfig with the specified array of
 * loaders when called.
 *
 * If a customiser function is provided, it's invoked when returned function is
 * invoked, with the defautLoaders array as the first argument followed by any
 * args the returned function is invoked with. It should return an array of
 * loaders which will be used in the resulting WebpackConfig.
 */
function loaders(defaultLoaders) {
    var customiser = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (!(0, _isArray2.default)(defaultLoaders)) throw new Error('first argument must be an array, got: ' + defaultLoaders);

        var loaders = customiser.apply(undefined, [defaultLoaders].concat(args));

        return new _webpackConfig2.default().merge({
            module: {
                loaders: loaders
            }
        });
    };
}

/**
 * As loaders(), except the function itself and the customiser take a single
 * loader, not an array of loaders.
 */
function loader(defaultLoader) {
    var customiser = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];

    return loaders([defaultLoader], function (_ref) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        var _ref2 = _slicedToArray(_ref, 1);

        var defaultLoader = _ref2[0];

        return [customiser.apply(undefined, [defaultLoader].concat(args))];
    });
}

/**
 * Lookup a value from WebpackConfig.environment.
 */
function env(key) {
    return _webpackConfig2.default.environment.get(key);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImxvYWRlcnMiLCJsb2FkZXIiLCJlbnYiLCJkZWZhdWx0TG9hZGVycyIsImN1c3RvbWlzZXIiLCJhcmdzIiwiRXJyb3IiLCJtZXJnZSIsIm1vZHVsZSIsImRlZmF1bHRMb2FkZXIiLCJrZXkiLCJlbnZpcm9ubWVudCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFjZ0JBLE8sR0FBQUEsTztRQW9CQUMsTSxHQUFBQSxNO1FBU0FDLEcsR0FBQUEsRzs7QUEzQ2hCOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQVNGLE9BQVQsQ0FBaUJHLGNBQWpCLEVBQXdEO0FBQUEsUUFBdkJDLFVBQXVCOztBQUMzRCxXQUFPLFlBQWE7QUFBQSwwQ0FBVEMsSUFBUztBQUFUQSxnQkFBUztBQUFBOztBQUNoQixZQUFHLENBQUMsdUJBQVFGLGNBQVIsQ0FBSixFQUNJLE1BQU0sSUFBSUcsS0FBSiw0Q0FDdUNILGNBRHZDLENBQU47O0FBR0osWUFBSUgsVUFBVUksNkJBQVdELGNBQVgsU0FBOEJFLElBQTlCLEVBQWQ7O0FBRUEsZUFBTyw4QkFBb0JFLEtBQXBCLENBQTBCO0FBQzdCQyxvQkFBUTtBQUNKUix5QkFBU0E7QUFETDtBQURxQixTQUExQixDQUFQO0FBS0gsS0FaRDtBQWFIOztBQUVEOzs7O0FBSU8sU0FBU0MsTUFBVCxDQUFnQlEsYUFBaEIsRUFBc0Q7QUFBQSxRQUF2QkwsVUFBdUI7O0FBQ3pELFdBQU9KLFFBQVEsQ0FBQ1MsYUFBRCxDQUFSLEVBQXlCLGdCQUE4QjtBQUFBLDJDQUFUSixJQUFTO0FBQVRBLGdCQUFTO0FBQUE7O0FBQUE7O0FBQUEsWUFBNUJJLGFBQTRCOztBQUMxRCxlQUFPLENBQUNMLDZCQUFXSyxhQUFYLFNBQTZCSixJQUE3QixFQUFELENBQVA7QUFDSCxLQUZNLENBQVA7QUFHSDs7QUFFRDs7O0FBR08sU0FBU0gsR0FBVCxDQUFhUSxHQUFiLEVBQWtCO0FBQ3JCLFdBQU8sd0JBQWNDLFdBQWQsQ0FBMEJDLEdBQTFCLENBQThCRixHQUE5QixDQUFQO0FBQ0giLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpZGVudGl0eSBmcm9tICdsb2Rhc2gvaWRlbnRpdHknO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuXG5pbXBvcnQgV2VicGFja0NvbmZpZyBmcm9tICd3ZWJwYWNrLWNvbmZpZyc7XG5cbi8qKlxuICogUmV0dXJuIGEgZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIFdlYnBhY2tDb25maWcgd2l0aCB0aGUgc3BlY2lmaWVkIGFycmF5IG9mXG4gKiBsb2FkZXJzIHdoZW4gY2FsbGVkLlxuICpcbiAqIElmIGEgY3VzdG9taXNlciBmdW5jdGlvbiBpcyBwcm92aWRlZCwgaXQncyBpbnZva2VkIHdoZW4gcmV0dXJuZWQgZnVuY3Rpb24gaXNcbiAqIGludm9rZWQsIHdpdGggdGhlIGRlZmF1dExvYWRlcnMgYXJyYXkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGZvbGxvd2VkIGJ5IGFueVxuICogYXJncyB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoLiBJdCBzaG91bGQgcmV0dXJuIGFuIGFycmF5IG9mXG4gKiBsb2FkZXJzIHdoaWNoIHdpbGwgYmUgdXNlZCBpbiB0aGUgcmVzdWx0aW5nIFdlYnBhY2tDb25maWcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXJzKGRlZmF1bHRMb2FkZXJzLCBjdXN0b21pc2VyID0gaWRlbnRpdHkpIHtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYoIWlzQXJyYXkoZGVmYXVsdExvYWRlcnMpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5LCBnb3Q6ICR7ZGVmYXVsdExvYWRlcnN9YCk7XG5cbiAgICAgICAgbGV0IGxvYWRlcnMgPSBjdXN0b21pc2VyKGRlZmF1bHRMb2FkZXJzLCAuLi5hcmdzKTtcblxuICAgICAgICByZXR1cm4gbmV3IFdlYnBhY2tDb25maWcoKS5tZXJnZSh7XG4gICAgICAgICAgICBtb2R1bGU6IHtcbiAgICAgICAgICAgICAgICBsb2FkZXJzOiBsb2FkZXJzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBcyBsb2FkZXJzKCksIGV4Y2VwdCB0aGUgZnVuY3Rpb24gaXRzZWxmIGFuZCB0aGUgY3VzdG9taXNlciB0YWtlIGEgc2luZ2xlXG4gKiBsb2FkZXIsIG5vdCBhbiBhcnJheSBvZiBsb2FkZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyKGRlZmF1bHRMb2FkZXIsIGN1c3RvbWlzZXIgPSBpZGVudGl0eSkge1xuICAgIHJldHVybiBsb2FkZXJzKFtkZWZhdWx0TG9hZGVyXSwgKFtkZWZhdWx0TG9hZGVyXSwgLi4uYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gW2N1c3RvbWlzZXIoZGVmYXVsdExvYWRlciwgLi4uYXJncyldO1xuICAgIH0pXG59XG5cbi8qKlxuICogTG9va3VwIGEgdmFsdWUgZnJvbSBXZWJwYWNrQ29uZmlnLmVudmlyb25tZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW52KGtleSkge1xuICAgIHJldHVybiBXZWJwYWNrQ29uZmlnLmVudmlyb25tZW50LmdldChrZXkpO1xufVxuIl19