'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.loader = loader;
exports.env = env;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashUtilityIdentity = require('lodash/utility/identity');

var _lodashUtilityIdentity2 = _interopRequireDefault(_lodashUtilityIdentity);

var _lodashLangToArray = require('lodash/lang/toArray');

var _lodashLangToArray2 = _interopRequireDefault(_lodashLangToArray);

var _webpackConfig = require('webpack-config');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function loader(defaultLoader, customiser) {
    return function () {

        var loader = (customiser || _lodashUtilityIdentity2['default']).apply(undefined, [defaultLoader].concat((0, _lodashLangToArray2['default'])(arguments)));

        return new _webpackConfig2['default']().merge({
            module: {
                loaders: [loader]
            }
        });
    };
}

;

/**
 * Lookup a value from WebpackConfig.environment.
 */

function env(key) {
    return _webpackConfig2['default'].environment.value(key);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7cUNBQXFCLHlCQUF5Qjs7OztpQ0FDMUIscUJBQXFCOzs7OzZCQUVmLGdCQUFnQjs7OztBQUduQyxTQUFTLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFO0FBQzlDLFdBQU8sWUFBVzs7QUFFZCxZQUFJLE1BQU0sR0FBRyxDQUFDLFVBQVUsdUNBQVksQ0FBRSxLQUFLLENBQ3ZDLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQ0FBUSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTNELGVBQU8sZ0NBQW1CLENBQUMsS0FBSyxDQUFDO0FBQzdCLGtCQUFNLEVBQUU7QUFDSix1QkFBTyxFQUFFLENBQ0wsTUFBTSxDQUNUO2FBQ0o7U0FDSixDQUFDLENBQUM7S0FDTixDQUFBO0NBQ0o7O0FBQUEsQ0FBQzs7Ozs7O0FBTUssU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQ3JCLFdBQU8sMkJBQWMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUMvQyIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlkZW50aXR5IGZyb20gJ2xvZGFzaC91dGlsaXR5L2lkZW50aXR5JztcbmltcG9ydCB0b0FycmF5IGZyb20gJ2xvZGFzaC9sYW5nL3RvQXJyYXknO1xuXG5pbXBvcnQgV2VicGFja0NvbmZpZyBmcm9tICd3ZWJwYWNrLWNvbmZpZyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlcihkZWZhdWx0TG9hZGVyLCBjdXN0b21pc2VyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGxldCBsb2FkZXIgPSAoY3VzdG9taXNlciB8fCBpZGVudGl0eSkuYXBwbHkoXG4gICAgICAgICAgICB1bmRlZmluZWQsIFtkZWZhdWx0TG9hZGVyXS5jb25jYXQodG9BcnJheShhcmd1bWVudHMpKSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBXZWJwYWNrQ29uZmlnKCkubWVyZ2Uoe1xuICAgICAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyczogW1xuICAgICAgICAgICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBMb29rdXAgYSB2YWx1ZSBmcm9tIFdlYnBhY2tDb25maWcuZW52aXJvbm1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnYoa2V5KSB7XG4gICAgcmV0dXJuIFdlYnBhY2tDb25maWcuZW52aXJvbm1lbnQudmFsdWUoa2V5KTtcbn0iXX0=