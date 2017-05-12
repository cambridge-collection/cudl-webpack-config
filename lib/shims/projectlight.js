'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var projectLight = _path2.default.join(PL_JS_DIR, 'custom.js');
    var modernizr = _path2.default.join(PL_LIB_DIR, 'modernizr.js');
    var iosFix = _path2.default.join(PL_LIB_DIR, 'ios-orientationchange-fix.js');

    return new _webpackConfig.Config().merge({
        resolve: {
            alias: {
                modernizr: modernizr,
                'ios-orientation-zoom-bug-fix': iosFix
            }
        },
        module: {
            loaders: [
            // Shim the project light JS as a commonjs module
            {
                test: bowerTestRegex(projectLight),
                loader: 'imports-loader?' + ['__1=jquery-migrate', '__2=ios-orientation-zoom-bug-fix'].join(',')
            },
            // Shim modernizr as a commonjs module
            {
                test: bowerTestRegex(modernizr),
                loader: 'imports-loader?this=>global!exports?Modernizr'
            },
            // Shim the ios rotate fix script
            {
                test: bowerTestRegex(iosFix),
                loader: 'imports-loader?this=>global'
            }]
        }
    });
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackConfig = require('webpack-config');

var _escapeStringRegexp = require('escape-string-regexp');

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PL_JS_DIR = 'project-light/javascripts';
var PL_LIB_DIR = _path2.default.join(PL_JS_DIR, 'libs');

function bowerTestRegex(location) {
    return new RegExp((0, _escapeStringRegexp2.default)(_path2.default.join('/', location)) + '$');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9wcm9qZWN0bGlnaHQuanMiXSwibmFtZXMiOlsicHJvamVjdExpZ2h0Iiwiam9pbiIsIlBMX0pTX0RJUiIsIm1vZGVybml6ciIsIlBMX0xJQl9ESVIiLCJpb3NGaXgiLCJtZXJnZSIsInJlc29sdmUiLCJhbGlhcyIsIm1vZHVsZSIsImxvYWRlcnMiLCJ0ZXN0IiwiYm93ZXJUZXN0UmVnZXgiLCJsb2FkZXIiLCJsb2NhdGlvbiIsIlJlZ0V4cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQWVlLFlBQVc7QUFDdEIsUUFBSUEsZUFBZSxlQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsV0FBckIsQ0FBbkI7QUFDQSxRQUFJQyxZQUFZLGVBQUtGLElBQUwsQ0FBVUcsVUFBVixFQUFzQixjQUF0QixDQUFoQjtBQUNBLFFBQUlDLFNBQVMsZUFBS0osSUFBTCxDQUFVRyxVQUFWLEVBQXNCLDhCQUF0QixDQUFiOztBQUVBLFdBQU8sNEJBQWFFLEtBQWIsQ0FBbUI7QUFDdEJDLGlCQUFTO0FBQ0xDLG1CQUFPO0FBQ0hMLDJCQUFXQSxTQURSO0FBRUgsZ0RBQWdDRTtBQUY3QjtBQURGLFNBRGE7QUFPdEJJLGdCQUFRO0FBQ0pDLHFCQUFTO0FBQ0w7QUFDQTtBQUNJQyxzQkFBTUMsZUFBZVosWUFBZixDQURWO0FBRUlhLHdCQUFPLG9CQUFxQixDQUN4QixvQkFEd0IsRUFFeEIsa0NBRndCLEVBRzFCWixJQUgwQixDQUdyQixHQUhxQjtBQUZoQyxhQUZLO0FBU0w7QUFDQTtBQUNJVSxzQkFBTUMsZUFBZVQsU0FBZixDQURWO0FBRUlVLHdCQUFRO0FBRlosYUFWSztBQWNMO0FBQ0E7QUFDSUYsc0JBQU1DLGVBQWVQLE1BQWYsQ0FEVjtBQUVJUSx3QkFBUTtBQUZaLGFBZks7QUFETDtBQVBjLEtBQW5CLENBQVA7QUE4QkgsQzs7QUFsREQ7Ozs7QUFFQTs7QUFDQTs7OztBQUVBOzs7O0FBR0EsSUFBTVgsWUFBWSwyQkFBbEI7QUFDQSxJQUFNRSxhQUFhLGVBQUtILElBQUwsQ0FBVUMsU0FBVixFQUFxQixNQUFyQixDQUFuQjs7QUFFQSxTQUFTVSxjQUFULENBQXdCRSxRQUF4QixFQUFrQztBQUM5QixXQUFPLElBQUlDLE1BQUosQ0FBVyxrQ0FBWSxlQUFLZCxJQUFMLENBQVUsR0FBVixFQUFlYSxRQUFmLENBQVosSUFBd0MsR0FBbkQsQ0FBUDtBQUNIIiwiZmlsZSI6InByb2plY3RsaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICd3ZWJwYWNrLWNvbmZpZyc7XG5pbXBvcnQgZXNjYXBlUmVnZXggZnJvbSAnZXNjYXBlLXN0cmluZy1yZWdleHAnO1xuXG5pbXBvcnQgeyBsb2FkZXIgfSBmcm9tICcuLi91dGlsJztcblxuXG5jb25zdCBQTF9KU19ESVIgPSAncHJvamVjdC1saWdodC9qYXZhc2NyaXB0cyc7XG5jb25zdCBQTF9MSUJfRElSID0gcGF0aC5qb2luKFBMX0pTX0RJUiwgJ2xpYnMnKTtcblxuZnVuY3Rpb24gYm93ZXJUZXN0UmVnZXgobG9jYXRpb24pIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChlc2NhcGVSZWdleChwYXRoLmpvaW4oJy8nLCBsb2NhdGlvbikpICsgJyQnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHByb2plY3RMaWdodCA9IHBhdGguam9pbihQTF9KU19ESVIsICdjdXN0b20uanMnKVxuICAgIGxldCBtb2Rlcm5penIgPSBwYXRoLmpvaW4oUExfTElCX0RJUiwgJ21vZGVybml6ci5qcycpO1xuICAgIGxldCBpb3NGaXggPSBwYXRoLmpvaW4oUExfTElCX0RJUiwgJ2lvcy1vcmllbnRhdGlvbmNoYW5nZS1maXguanMnKTtcblxuICAgIHJldHVybiBuZXcgQ29uZmlnKCkubWVyZ2Uoe1xuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgICAgIG1vZGVybml6cjogbW9kZXJuaXpyLFxuICAgICAgICAgICAgICAgICdpb3Mtb3JpZW50YXRpb24tem9vbS1idWctZml4JzogaW9zRml4LFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb2R1bGU6IHtcbiAgICAgICAgICAgIGxvYWRlcnM6IFtcbiAgICAgICAgICAgICAgICAvLyBTaGltIHRoZSBwcm9qZWN0IGxpZ2h0IEpTIGFzIGEgY29tbW9uanMgbW9kdWxlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0OiBib3dlclRlc3RSZWdleChwcm9qZWN0TGlnaHQpLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI6J2ltcG9ydHMtbG9hZGVyPycgICsgW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ19fMT1qcXVlcnktbWlncmF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnX18yPWlvcy1vcmllbnRhdGlvbi16b29tLWJ1Zy1maXgnXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbignLCcpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBTaGltIG1vZGVybml6ciBhcyBhIGNvbW1vbmpzIG1vZHVsZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdDogYm93ZXJUZXN0UmVnZXgobW9kZXJuaXpyKSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyOiAnaW1wb3J0cy1sb2FkZXI/dGhpcz0+Z2xvYmFsIWV4cG9ydHM/TW9kZXJuaXpyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gU2hpbSB0aGUgaW9zIHJvdGF0ZSBmaXggc2NyaXB0XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0OiBib3dlclRlc3RSZWdleChpb3NGaXgpLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI6ICdpbXBvcnRzLWxvYWRlcj90aGlzPT5nbG9iYWwnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iXX0=