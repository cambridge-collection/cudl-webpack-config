'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var projectLight = _path2.default.join(PL_JS_DIR, 'custom.js');
    var modernizr = _path2.default.join(PL_LIB_DIR, 'modernizr.js');
    var iosFix = _path2.default.join(PL_LIB_DIR, 'ios-orientationchange-fix.js');

    return new _webpackConfig2.default().merge({
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
                loader: 'imports?' + ['__1=jquery-migrate', '__2=ios-orientation-zoom-bug-fix'].join(',')
            },
            // Shim modernizr as a commonjs module
            {
                test: bowerTestRegex(modernizr),
                loader: 'imports?this=>global!exports?Modernizr'
            },
            // Shim the ios rotate fix script
            {
                test: bowerTestRegex(iosFix),
                loader: 'imports?this=>global'
            }]
        }
    });
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackConfig = require('webpack-config');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _escapeStringRegexp = require('escape-string-regexp');

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PL_JS_DIR = 'project-light/javascripts';
var PL_LIB_DIR = _path2.default.join(PL_JS_DIR, 'libs');

function bowerTestRegex(location) {
    return new RegExp((0, _escapeStringRegexp2.default)(_path2.default.join('/', location)) + '$');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9wcm9qZWN0bGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQWVlLFlBQVc7QUFDdEIsUUFBSSxlQUFlLGVBQUssSUFBTCxDQUFVLFNBQVYsRUFBcUIsV0FBckIsQ0FBZixDQURrQjtBQUV0QixRQUFJLFlBQVksZUFBSyxJQUFMLENBQVUsVUFBVixFQUFzQixjQUF0QixDQUFaLENBRmtCO0FBR3RCLFFBQUksU0FBUyxlQUFLLElBQUwsQ0FBVSxVQUFWLEVBQXNCLDhCQUF0QixDQUFULENBSGtCOztBQUt0QixXQUFPLDhCQUFvQixLQUFwQixDQUEwQjtBQUM3QixpQkFBUztBQUNMLG1CQUFPO0FBQ0gsMkJBQVcsU0FBWDtBQUNBLGdEQUFnQyxNQUFoQzthQUZKO1NBREo7QUFNQSxnQkFBUTtBQUNKLHFCQUFTOztBQUVMO0FBQ0ksc0JBQU0sZUFBZSxZQUFmLENBQU47QUFDQSx3QkFBTyxhQUFjLENBQ2pCLG9CQURpQixFQUVqQixrQ0FGaUIsRUFHbkIsSUFIbUIsQ0FHZCxHQUhjLENBQWQ7YUFKTjs7QUFVTDtBQUNJLHNCQUFNLGVBQWUsU0FBZixDQUFOO0FBQ0Esd0JBQVEsd0NBQVI7YUFaQzs7QUFlTDtBQUNJLHNCQUFNLGVBQWUsTUFBZixDQUFOO0FBQ0Esd0JBQVEsc0JBQVI7YUFqQkMsQ0FBVDtTQURKO0tBUEcsQ0FBUCxDQUxzQjtDQUFYOztBQWZmOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBR0EsSUFBTSxZQUFZLDJCQUFaO0FBQ04sSUFBTSxhQUFhLGVBQUssSUFBTCxDQUFVLFNBQVYsRUFBcUIsTUFBckIsQ0FBYjs7QUFFTixTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0M7QUFDOUIsV0FBTyxJQUFJLE1BQUosQ0FBVyxrQ0FBWSxlQUFLLElBQUwsQ0FBVSxHQUFWLEVBQWUsUUFBZixDQUFaLElBQXdDLEdBQXhDLENBQWxCLENBRDhCO0NBQWxDIiwiZmlsZSI6InByb2plY3RsaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgV2VicGFja0NvbmZpZyBmcm9tICd3ZWJwYWNrLWNvbmZpZyc7XG5pbXBvcnQgZXNjYXBlUmVnZXggZnJvbSAnZXNjYXBlLXN0cmluZy1yZWdleHAnO1xuXG5pbXBvcnQgeyBsb2FkZXIgfSBmcm9tICcuLi91dGlsJztcblxuXG5jb25zdCBQTF9KU19ESVIgPSAncHJvamVjdC1saWdodC9qYXZhc2NyaXB0cyc7XG5jb25zdCBQTF9MSUJfRElSID0gcGF0aC5qb2luKFBMX0pTX0RJUiwgJ2xpYnMnKTtcblxuZnVuY3Rpb24gYm93ZXJUZXN0UmVnZXgobG9jYXRpb24pIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChlc2NhcGVSZWdleChwYXRoLmpvaW4oJy8nLCBsb2NhdGlvbikpICsgJyQnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHByb2plY3RMaWdodCA9IHBhdGguam9pbihQTF9KU19ESVIsICdjdXN0b20uanMnKVxuICAgIGxldCBtb2Rlcm5penIgPSBwYXRoLmpvaW4oUExfTElCX0RJUiwgJ21vZGVybml6ci5qcycpO1xuICAgIGxldCBpb3NGaXggPSBwYXRoLmpvaW4oUExfTElCX0RJUiwgJ2lvcy1vcmllbnRhdGlvbmNoYW5nZS1maXguanMnKTtcblxuICAgIHJldHVybiBuZXcgV2VicGFja0NvbmZpZygpLm1lcmdlKHtcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICAgICBtb2Rlcm5penI6IG1vZGVybml6cixcbiAgICAgICAgICAgICAgICAnaW9zLW9yaWVudGF0aW9uLXpvb20tYnVnLWZpeCc6IGlvc0ZpeCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICAgICAgLy8gU2hpbSB0aGUgcHJvamVjdCBsaWdodCBKUyBhcyBhIGNvbW1vbmpzIG1vZHVsZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdDogYm93ZXJUZXN0UmVnZXgocHJvamVjdExpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyOidpbXBvcnRzPycgICsgW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ19fMT1qcXVlcnktbWlncmF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnX18yPWlvcy1vcmllbnRhdGlvbi16b29tLWJ1Zy1maXgnXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbignLCcpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBTaGltIG1vZGVybml6ciBhcyBhIGNvbW1vbmpzIG1vZHVsZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdDogYm93ZXJUZXN0UmVnZXgobW9kZXJuaXpyKSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyOiAnaW1wb3J0cz90aGlzPT5nbG9iYWwhZXhwb3J0cz9Nb2Rlcm5penInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBTaGltIHRoZSBpb3Mgcm90YXRlIGZpeCBzY3JpcHRcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3Q6IGJvd2VyVGVzdFJlZ2V4KGlvc0ZpeCksXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjogJ2ltcG9ydHM/dGhpcz0+Z2xvYmFsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl19