'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports.loaders = loaders;
exports.loader = loader;
exports.env = env;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashIdentity = require('lodash/identity');

var _lodashIdentity2 = _interopRequireDefault(_lodashIdentity);

var _lodashIsArray = require('lodash/isArray');

var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);

var _webpackConfig = require('webpack-config');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

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
    var customiser = arguments.length <= 1 || arguments[1] === undefined ? _lodashIdentity2['default'] : arguments[1];

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (!(0, _lodashIsArray2['default'])(defaultLoaders)) throw new Error('first argument must be an array, got: ' + defaultLoaders);

        var loaders = customiser.apply(undefined, [defaultLoaders].concat(args));

        return new _webpackConfig2['default']().merge({
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
    var customiser = arguments.length <= 1 || arguments[1] === undefined ? _lodashIdentity2['default'] : arguments[1];

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
    return _webpackConfig2['default'].environment.get(key);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzhCQUFxQixpQkFBaUI7Ozs7NkJBQ2xCLGdCQUFnQjs7Ozs2QkFFVixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7O0FBV25DLFNBQVMsT0FBTyxDQUFDLGNBQWMsRUFBeUI7UUFBdkIsVUFBVTs7QUFDOUMsV0FBTyxZQUFhOzBDQUFULElBQUk7QUFBSixnQkFBSTs7O0FBQ1gsWUFBRyxDQUFDLGdDQUFRLGNBQWMsQ0FBQyxFQUN2QixNQUFNLElBQUksS0FBSyw0Q0FDOEIsY0FBYyxDQUFHLENBQUM7O0FBRW5FLFlBQUksT0FBTyxHQUFHLFVBQVUsbUJBQUMsY0FBYyxTQUFLLElBQUksRUFBQyxDQUFDOztBQUVsRCxlQUFPLGdDQUFtQixDQUFDLEtBQUssQ0FBQztBQUM3QixrQkFBTSxFQUFFO0FBQ0osdUJBQU8sRUFBRSxPQUFPO2FBQ25CO1NBQ0osQ0FBQyxDQUFDO0tBQ04sQ0FBQTtDQUNKOzs7Ozs7O0FBTU0sU0FBUyxNQUFNLENBQUMsYUFBYSxFQUF5QjtRQUF2QixVQUFVOztBQUM1QyxXQUFPLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFVBQUMsSUFBZSxFQUFjOzJDQUFULElBQUk7QUFBSixnQkFBSTs7O21DQUF4QixJQUFlOztZQUFkLGFBQWE7O0FBQzNDLGVBQU8sQ0FBQyxVQUFVLG1CQUFDLGFBQWEsU0FBSyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0tBQy9DLENBQUMsQ0FBQTtDQUNMOzs7Ozs7QUFLTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUU7QUFDckIsV0FBTywyQkFBYyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQzdDIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaWRlbnRpdHkgZnJvbSAnbG9kYXNoL2lkZW50aXR5JztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9pc0FycmF5JztcblxuaW1wb3J0IFdlYnBhY2tDb25maWcgZnJvbSAnd2VicGFjay1jb25maWcnO1xuXG4vKipcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBXZWJwYWNrQ29uZmlnIHdpdGggdGhlIHNwZWNpZmllZCBhcnJheSBvZlxuICogbG9hZGVycyB3aGVuIGNhbGxlZC5cbiAqXG4gKiBJZiBhIGN1c3RvbWlzZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIGl0J3MgaW52b2tlZCB3aGVuIHJldHVybmVkIGZ1bmN0aW9uIGlzXG4gKiBpbnZva2VkLCB3aXRoIHRoZSBkZWZhdXRMb2FkZXJzIGFycmF5IGFzIHRoZSBmaXJzdCBhcmd1bWVudCBmb2xsb3dlZCBieSBhbnlcbiAqIGFyZ3MgdGhlIHJldHVybmVkIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aC4gSXQgc2hvdWxkIHJldHVybiBhbiBhcnJheSBvZlxuICogbG9hZGVycyB3aGljaCB3aWxsIGJlIHVzZWQgaW4gdGhlIHJlc3VsdGluZyBXZWJwYWNrQ29uZmlnLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVycyhkZWZhdWx0TG9hZGVycywgY3VzdG9taXNlciA9IGlkZW50aXR5KSB7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmKCFpc0FycmF5KGRlZmF1bHRMb2FkZXJzKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheSwgZ290OiAke2RlZmF1bHRMb2FkZXJzfWApO1xuXG4gICAgICAgIGxldCBsb2FkZXJzID0gY3VzdG9taXNlcihkZWZhdWx0TG9hZGVycywgLi4uYXJncyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBXZWJwYWNrQ29uZmlnKCkubWVyZ2Uoe1xuICAgICAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyczogbG9hZGVyc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogQXMgbG9hZGVycygpLCBleGNlcHQgdGhlIGZ1bmN0aW9uIGl0c2VsZiBhbmQgdGhlIGN1c3RvbWlzZXIgdGFrZSBhIHNpbmdsZVxuICogbG9hZGVyLCBub3QgYW4gYXJyYXkgb2YgbG9hZGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlcihkZWZhdWx0TG9hZGVyLCBjdXN0b21pc2VyID0gaWRlbnRpdHkpIHtcbiAgICByZXR1cm4gbG9hZGVycyhbZGVmYXVsdExvYWRlcl0sIChbZGVmYXVsdExvYWRlcl0sIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIFtjdXN0b21pc2VyKGRlZmF1bHRMb2FkZXIsIC4uLmFyZ3MpXTtcbiAgICB9KVxufVxuXG4vKipcbiAqIExvb2t1cCBhIHZhbHVlIGZyb20gV2VicGFja0NvbmZpZy5lbnZpcm9ubWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVudihrZXkpIHtcbiAgICByZXR1cm4gV2VicGFja0NvbmZpZy5lbnZpcm9ubWVudC5nZXQoa2V5KTtcbn1cbiJdfQ==