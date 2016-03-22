'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _webpackConfig = require('webpack-config');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _util = require('../util');

exports['default'] = function () {
    return new _webpackConfig2['default']().merge({
        resolve: {
            alias: {
                // Alias the main file as "paging" is unclear and typing
                // import 'paging/jquery.paging' in code is annoying.
                'jquery-paging': 'paging/jquery.paging'
            }
        },
        module: {
            loaders: [{
                test: /\/jquery\.paging\.js$/,
                include: /\/bower_components\/paging\//,
                loader: 'imports?jQuery=jquery,this=>global'
            }]
        }
    });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9qcXVlcnktcGFnaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzZCQUEwQixnQkFBZ0I7Ozs7b0JBRW5CLFNBQVM7O3FCQUdqQixZQUFXO0FBQ3RCLFdBQU8sZ0NBQW1CLENBQUMsS0FBSyxDQUFDO0FBQzdCLGVBQU8sRUFBRTtBQUNMLGlCQUFLLEVBQUU7OztBQUdILCtCQUFlLEVBQUUsc0JBQXNCO2FBQzFDO1NBQ0o7QUFDRCxjQUFNLEVBQUU7QUFDSixtQkFBTyxFQUFFLENBQ0w7QUFDSSxvQkFBSSxFQUFFLHVCQUF1QjtBQUM3Qix1QkFBTyxFQUFFLDhCQUE4QjtBQUN2QyxzQkFBTSxFQUFFLG9DQUFvQzthQUMvQyxDQUNKO1NBQ0o7S0FDSixDQUFDLENBQUM7Q0FDTiIsImZpbGUiOiJqcXVlcnktcGFnaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYnBhY2tDb25maWcgZnJvbSAnd2VicGFjay1jb25maWcnO1xuXG5pbXBvcnQgeyBsb2FkZXIgfSBmcm9tICcuLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFdlYnBhY2tDb25maWcoKS5tZXJnZSh7XG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgLy8gQWxpYXMgdGhlIG1haW4gZmlsZSBhcyBcInBhZ2luZ1wiIGlzIHVuY2xlYXIgYW5kIHR5cGluZ1xuICAgICAgICAgICAgICAgIC8vIGltcG9ydCAncGFnaW5nL2pxdWVyeS5wYWdpbmcnIGluIGNvZGUgaXMgYW5ub3lpbmcuXG4gICAgICAgICAgICAgICAgJ2pxdWVyeS1wYWdpbmcnOiAncGFnaW5nL2pxdWVyeS5wYWdpbmcnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb2R1bGU6IHtcbiAgICAgICAgICAgIGxvYWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3Q6IC9cXC9qcXVlcnlcXC5wYWdpbmdcXC5qcyQvLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiAvXFwvYm93ZXJfY29tcG9uZW50c1xcL3BhZ2luZ1xcLy8sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjogJ2ltcG9ydHM/alF1ZXJ5PWpxdWVyeSx0aGlzPT5nbG9iYWwnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iXX0=