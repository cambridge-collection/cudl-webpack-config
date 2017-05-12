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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return a function which creates a Config with the specified array of
 * loaders when called.
 *
 * If a customiser function is provided, it's invoked when returned function is
 * invoked, with the defautLoaders array as the first argument followed by any
 * args the returned function is invoked with. It should return an array of
 * loaders which will be used in the resulting Config.
 */
function loaders(defaultLoaders) {
    var customiser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity2.default;

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (!(0, _isArray2.default)(defaultLoaders)) throw new Error('first argument must be an array, got: ' + defaultLoaders);

        var loaders = customiser.apply(undefined, [defaultLoaders].concat(args));

        return new _webpackConfig.Config().merge({
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
    var customiser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity2.default;

    return loaders([defaultLoader], function (_ref) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        var _ref2 = _slicedToArray(_ref, 1),
            defaultLoader = _ref2[0];

        return [customiser.apply(undefined, [defaultLoader].concat(args))];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImxvYWRlcnMiLCJsb2FkZXIiLCJlbnYiLCJkZWZhdWx0TG9hZGVycyIsImN1c3RvbWlzZXIiLCJhcmdzIiwiRXJyb3IiLCJtZXJnZSIsIm1vZHVsZSIsImRlZmF1bHRMb2FkZXIiLCJyZXNvbHZlIiwidmFsdWUiLCJjYWxsIiwia2V5IiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQWNnQkEsTyxHQUFBQSxPO1FBb0JBQyxNLEdBQUFBLE07UUFvQkFDLEcsR0FBQUEsRzs7QUF0RGhCOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7Ozs7QUFTTyxTQUFTRixPQUFULENBQWlCRyxjQUFqQixFQUF3RDtBQUFBLFFBQXZCQyxVQUF1Qjs7QUFDM0QsV0FBTyxZQUFhO0FBQUEsMENBQVRDLElBQVM7QUFBVEEsZ0JBQVM7QUFBQTs7QUFDaEIsWUFBRyxDQUFDLHVCQUFRRixjQUFSLENBQUosRUFDSSxNQUFNLElBQUlHLEtBQUosNENBQ3VDSCxjQUR2QyxDQUFOOztBQUdKLFlBQUlILFVBQVVJLDZCQUFXRCxjQUFYLFNBQThCRSxJQUE5QixFQUFkOztBQUVBLGVBQU8sNEJBQWFFLEtBQWIsQ0FBbUI7QUFDdEJDLG9CQUFRO0FBQ0pSLHlCQUFTQTtBQURMO0FBRGMsU0FBbkIsQ0FBUDtBQUtILEtBWkQ7QUFhSDs7QUFFRDs7OztBQUlPLFNBQVNDLE1BQVQsQ0FBZ0JRLGFBQWhCLEVBQXNEO0FBQUEsUUFBdkJMLFVBQXVCOztBQUN6RCxXQUFPSixRQUFRLENBQUNTLGFBQUQsQ0FBUixFQUF5QixnQkFBOEI7QUFBQSwyQ0FBVEosSUFBUztBQUFUQSxnQkFBUztBQUFBOztBQUFBO0FBQUEsWUFBNUJJLGFBQTRCOztBQUMxRCxlQUFPLENBQUNMLDZCQUFXSyxhQUFYLFNBQTZCSixJQUE3QixFQUFELENBQVA7QUFDSCxLQUZNLENBQVA7QUFHSDs7QUFFRDs7OztBQUlBLFNBQVNLLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3BCLFFBQUcsT0FBT0EsS0FBUCxLQUFpQixVQUFwQixFQUFnQztBQUM1QixlQUFPQSxNQUFNQyxJQUFOLEVBQVA7QUFDSDtBQUNELFdBQU9ELEtBQVA7QUFDSDs7QUFFRDs7O0FBR08sU0FBU1QsR0FBVCxDQUFhVyxHQUFiLEVBQW1DO0FBQUEsUUFBakJYLEdBQWlCOztBQUN0QyxXQUFPUSxRQUFRUixJQUFJWSxHQUFKLENBQVFELEdBQVIsQ0FBUixDQUFQO0FBQ0giLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpZGVudGl0eSBmcm9tICdsb2Rhc2gvaWRlbnRpdHknO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2lzQXJyYXknO1xuXG5pbXBvcnQgeyBDb25maWcsIGVudmlyb25tZW50IH0gZnJvbSAnd2VicGFjay1jb25maWcnO1xuXG4vKipcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBDb25maWcgd2l0aCB0aGUgc3BlY2lmaWVkIGFycmF5IG9mXG4gKiBsb2FkZXJzIHdoZW4gY2FsbGVkLlxuICpcbiAqIElmIGEgY3VzdG9taXNlciBmdW5jdGlvbiBpcyBwcm92aWRlZCwgaXQncyBpbnZva2VkIHdoZW4gcmV0dXJuZWQgZnVuY3Rpb24gaXNcbiAqIGludm9rZWQsIHdpdGggdGhlIGRlZmF1dExvYWRlcnMgYXJyYXkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGZvbGxvd2VkIGJ5IGFueVxuICogYXJncyB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoLiBJdCBzaG91bGQgcmV0dXJuIGFuIGFycmF5IG9mXG4gKiBsb2FkZXJzIHdoaWNoIHdpbGwgYmUgdXNlZCBpbiB0aGUgcmVzdWx0aW5nIENvbmZpZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlcnMoZGVmYXVsdExvYWRlcnMsIGN1c3RvbWlzZXIgPSBpZGVudGl0eSkge1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBpZighaXNBcnJheShkZWZhdWx0TG9hZGVycykpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXksIGdvdDogJHtkZWZhdWx0TG9hZGVyc31gKTtcblxuICAgICAgICBsZXQgbG9hZGVycyA9IGN1c3RvbWlzZXIoZGVmYXVsdExvYWRlcnMsIC4uLmFyZ3MpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ29uZmlnKCkubWVyZ2Uoe1xuICAgICAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyczogbG9hZGVyc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogQXMgbG9hZGVycygpLCBleGNlcHQgdGhlIGZ1bmN0aW9uIGl0c2VsZiBhbmQgdGhlIGN1c3RvbWlzZXIgdGFrZSBhIHNpbmdsZVxuICogbG9hZGVyLCBub3QgYW4gYXJyYXkgb2YgbG9hZGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlcihkZWZhdWx0TG9hZGVyLCBjdXN0b21pc2VyID0gaWRlbnRpdHkpIHtcbiAgICByZXR1cm4gbG9hZGVycyhbZGVmYXVsdExvYWRlcl0sIChbZGVmYXVsdExvYWRlcl0sIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIFtjdXN0b21pc2VyKGRlZmF1bHRMb2FkZXIsIC4uLmFyZ3MpXTtcbiAgICB9KVxufVxuXG4vKipcbiAqIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIHJldHVybiB0aGUgcmVzdWx0IG9mIGV4ZWN1dGluZyBpdCwgb3RoZXJ3aXNlIHJldHVyblxuICogdGhlIHZhbHVlIGFzIGlzLlxuICovXG5mdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gICAgaWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jYWxsKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBMb29rdXAgYSB2YWx1ZSBmcm9tIHRoZSBkZWZhdWx0IHdlYnBhY2stY29uZmlnIGVudmlyb25tZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW52KGtleSwgZW52PWVudmlyb25tZW50KSB7XG4gICAgcmV0dXJuIHJlc29sdmUoZW52LmdldChrZXkpKTtcbn1cbiJdfQ==