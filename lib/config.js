'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.Config = undefined;

var _webpackConfig = require('webpack-config');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _defaultConfigLoader = require('webpack-config/lib/defaultConfigLoader');

var _defaultConfigLoader2 = _interopRequireDefault(_defaultConfigLoader);

var _es6modules = require('./es6modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** A webpack-config Config class which can extend() from es6 modules. */
var Config = exports.Config = function (_WebpackConfig) {
        _inherits(Config, _WebpackConfig);

        function Config() {
                _classCallCheck(this, Config);

                return _possibleConstructorReturn(this, (Config.__proto__ || Object.getPrototypeOf(Config)).apply(this, arguments));
        }

        return Config;
}(_webpackConfig2.default);

// Use our ConfigFactory which knows about es6 modules


Config.factory = new _es6modules.Es6ConfigFactory();

// Use the default config loader with our es6 module factory
Config.loader = new _defaultConfigLoader2.default(Config.factory, _defaultConfigLoader2.default.INSTANCE);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcuanMiXSwibmFtZXMiOlsiQ29uZmlnIiwiZmFjdG9yeSIsImxvYWRlciIsIklOU1RBTkNFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7O0FBR0E7SUFDYUEsTSxXQUFBQSxNOzs7Ozs7Ozs7Ozs7QUFFYjs7O0FBQ0FBLE9BQU9DLE9BQVAsR0FBaUIsa0NBQWpCOztBQUVBO0FBQ0FELE9BQU9FLE1BQVAsR0FBZ0Isa0NBQ1JGLE9BQU9DLE9BREMsRUFDUSw4QkFBMEJFLFFBRGxDLENBQWhCIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWJwYWNrQ29uZmlnIGZyb20gJ3dlYnBhY2stY29uZmlnJztcbmltcG9ydCBEZWZhdWx0Q29uZmlnTG9hZGVyIGZyb20gJ3dlYnBhY2stY29uZmlnL2xpYi9kZWZhdWx0Q29uZmlnTG9hZGVyJztcbmltcG9ydCBEZWZhdWx0Q29uZmlnUGF0aFJlc29sdmVyIGZyb20gJ3dlYnBhY2stY29uZmlnL2xpYi9kZWZhdWx0Q29uZmlnTG9hZGVyJztcblxuaW1wb3J0IHsgRXM2Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4vZXM2bW9kdWxlcyc7XG5cblxuLyoqIEEgd2VicGFjay1jb25maWcgQ29uZmlnIGNsYXNzIHdoaWNoIGNhbiBleHRlbmQoKSBmcm9tIGVzNiBtb2R1bGVzLiAqL1xuZXhwb3J0IGNsYXNzIENvbmZpZyBleHRlbmRzIFdlYnBhY2tDb25maWcgeyB9XG5cbi8vIFVzZSBvdXIgQ29uZmlnRmFjdG9yeSB3aGljaCBrbm93cyBhYm91dCBlczYgbW9kdWxlc1xuQ29uZmlnLmZhY3RvcnkgPSBuZXcgRXM2Q29uZmlnRmFjdG9yeSgpO1xuXG4vLyBVc2UgdGhlIGRlZmF1bHQgY29uZmlnIGxvYWRlciB3aXRoIG91ciBlczYgbW9kdWxlIGZhY3RvcnlcbkNvbmZpZy5sb2FkZXIgPSBuZXcgRGVmYXVsdENvbmZpZ0xvYWRlcihcbiAgICAgICAgQ29uZmlnLmZhY3RvcnksIERlZmF1bHRDb25maWdQYXRoUmVzb2x2ZXIuSU5TVEFOQ0UpO1xuIl19