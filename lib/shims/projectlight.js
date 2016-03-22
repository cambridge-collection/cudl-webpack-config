'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackConfig = require('webpack-config');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _escapeStringRegexp = require('escape-string-regexp');

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

var _util = require('../util');

var PL_JS_DIR = 'project-light/javascripts';
var PL_LIB_DIR = _path2['default'].join(PL_JS_DIR, 'libs');

function bowerTestRegex(location) {
    return new RegExp((0, _escapeStringRegexp2['default'])(_path2['default'].join('/', location)) + '$');
}

exports['default'] = function () {
    var projectLight = _path2['default'].join(PL_JS_DIR, 'custom.js');
    var modernizr = _path2['default'].join(PL_LIB_DIR, 'modernizr.js');
    var iosFix = _path2['default'].join(PL_LIB_DIR, 'ios-orientationchange-fix.js');

    return new _webpackConfig2['default']().merge({
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

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9wcm9qZWN0bGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7b0JBQWlCLE1BQU07Ozs7NkJBRUcsZ0JBQWdCOzs7O2tDQUNsQixzQkFBc0I7Ozs7b0JBRXZCLFNBQVM7O0FBR2hDLElBQU0sU0FBUyxHQUFHLDJCQUEyQixDQUFDO0FBQzlDLElBQU0sVUFBVSxHQUFHLGtCQUFLLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRWhELFNBQVMsY0FBYyxDQUFDLFFBQVEsRUFBRTtBQUM5QixXQUFPLElBQUksTUFBTSxDQUFDLHFDQUFZLGtCQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztDQUNsRTs7cUJBRWMsWUFBVztBQUN0QixRQUFJLFlBQVksR0FBRyxrQkFBSyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0FBQ3BELFFBQUksU0FBUyxHQUFHLGtCQUFLLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDdEQsUUFBSSxNQUFNLEdBQUcsa0JBQUssSUFBSSxDQUFDLFVBQVUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDOztBQUVuRSxXQUFPLGdDQUFtQixDQUFDLEtBQUssQ0FBQztBQUM3QixlQUFPLEVBQUU7QUFDTCxpQkFBSyxFQUFFO0FBQ0gseUJBQVMsRUFBRSxTQUFTO0FBQ3BCLDhDQUE4QixFQUFFLE1BQU07YUFDekM7U0FDSjtBQUNELGNBQU0sRUFBRTtBQUNKLG1CQUFPLEVBQUU7O0FBRUw7QUFDSSxvQkFBSSxFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFDbEMsc0JBQU0sRUFBQyxVQUFVLEdBQUksQ0FDakIsb0JBQW9CLEVBQ3BCLGtDQUFrQyxDQUNyQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDZDs7QUFFRDtBQUNJLG9CQUFJLEVBQUUsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUMvQixzQkFBTSxFQUFFLHdDQUF3QzthQUNuRDs7QUFFRDtBQUNJLG9CQUFJLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQztBQUM1QixzQkFBTSxFQUFFLHNCQUFzQjthQUNqQyxDQUNKO1NBQ0o7S0FDSixDQUFDLENBQUM7Q0FDTiIsImZpbGUiOiJwcm9qZWN0bGlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IFdlYnBhY2tDb25maWcgZnJvbSAnd2VicGFjay1jb25maWcnO1xuaW1wb3J0IGVzY2FwZVJlZ2V4IGZyb20gJ2VzY2FwZS1zdHJpbmctcmVnZXhwJztcblxuaW1wb3J0IHsgbG9hZGVyIH0gZnJvbSAnLi4vdXRpbCc7XG5cblxuY29uc3QgUExfSlNfRElSID0gJ3Byb2plY3QtbGlnaHQvamF2YXNjcmlwdHMnO1xuY29uc3QgUExfTElCX0RJUiA9IHBhdGguam9pbihQTF9KU19ESVIsICdsaWJzJyk7XG5cbmZ1bmN0aW9uIGJvd2VyVGVzdFJlZ2V4KGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoZXNjYXBlUmVnZXgocGF0aC5qb2luKCcvJywgbG9jYXRpb24pKSArICckJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGxldCBwcm9qZWN0TGlnaHQgPSBwYXRoLmpvaW4oUExfSlNfRElSLCAnY3VzdG9tLmpzJylcbiAgICBsZXQgbW9kZXJuaXpyID0gcGF0aC5qb2luKFBMX0xJQl9ESVIsICdtb2Rlcm5penIuanMnKTtcbiAgICBsZXQgaW9zRml4ID0gcGF0aC5qb2luKFBMX0xJQl9ESVIsICdpb3Mtb3JpZW50YXRpb25jaGFuZ2UtZml4LmpzJyk7XG5cbiAgICByZXR1cm4gbmV3IFdlYnBhY2tDb25maWcoKS5tZXJnZSh7XG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgbW9kZXJuaXpyOiBtb2Rlcm5penIsXG4gICAgICAgICAgICAgICAgJ2lvcy1vcmllbnRhdGlvbi16b29tLWJ1Zy1maXgnOiBpb3NGaXgsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZToge1xuICAgICAgICAgICAgbG9hZGVyczogW1xuICAgICAgICAgICAgICAgIC8vIFNoaW0gdGhlIHByb2plY3QgbGlnaHQgSlMgYXMgYSBjb21tb25qcyBtb2R1bGVcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3Q6IGJvd2VyVGVzdFJlZ2V4KHByb2plY3RMaWdodCksXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjonaW1wb3J0cz8nICArIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdfXzE9anF1ZXJ5LW1pZ3JhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ19fMj1pb3Mtb3JpZW50YXRpb24tem9vbS1idWctZml4J1xuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJywnKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gU2hpbSBtb2Rlcm5penIgYXMgYSBjb21tb25qcyBtb2R1bGVcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3Q6IGJvd2VyVGVzdFJlZ2V4KG1vZGVybml6ciksXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjogJ2ltcG9ydHM/dGhpcz0+Z2xvYmFsIWV4cG9ydHM/TW9kZXJuaXpyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gU2hpbSB0aGUgaW9zIHJvdGF0ZSBmaXggc2NyaXB0XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0OiBib3dlclRlc3RSZWdleChpb3NGaXgpLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI6ICdpbXBvcnRzP3RoaXM9Pmdsb2JhbCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdfQ==