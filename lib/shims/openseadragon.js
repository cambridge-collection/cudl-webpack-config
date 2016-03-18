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
                // Enough openseadragons?
                openseadragon: 'openseadragon/built-openseadragon/' + 'openseadragon/openseadragon.js'
            }
        },
        module: {
            loaders: [{
                test: /\/openseadragon\.js$/,
                include: /\/bower_components\/openseadragon\//,
                loader: 'exports?OpenSeadragon'
            }]
        }
    });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9vcGVuc2VhZHJhZ29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzZCQUEwQixnQkFBZ0I7Ozs7b0JBRW5CLFNBQVM7O3FCQUdqQixZQUFXO0FBQ3RCLFdBQU8sZ0NBQW1CLENBQUMsS0FBSyxDQUFDO0FBQzdCLGVBQU8sRUFBRTtBQUNMLGlCQUFLLEVBQUU7O0FBRUgsNkJBQWEsRUFBRSxvQ0FBb0MsR0FDbkMsZ0NBQWdDO2FBQ25EO1NBQ0o7QUFDRCxjQUFNLEVBQUU7QUFDSixtQkFBTyxFQUFFLENBQ0w7QUFDSSxvQkFBSSxFQUFFLHNCQUFzQjtBQUM1Qix1QkFBTyxFQUFFLHFDQUFxQztBQUM5QyxzQkFBTSxFQUFFLHVCQUF1QjthQUNsQyxDQUNKO1NBQ0o7S0FDSixDQUFDLENBQUM7Q0FDTiIsImZpbGUiOiJvcGVuc2VhZHJhZ29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYnBhY2tDb25maWcgZnJvbSAnd2VicGFjay1jb25maWcnO1xuXG5pbXBvcnQgeyBsb2FkZXIgfSBmcm9tICcuLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFdlYnBhY2tDb25maWcoKS5tZXJnZSh7XG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgLy8gRW5vdWdoIG9wZW5zZWFkcmFnb25zP1xuICAgICAgICAgICAgICAgIG9wZW5zZWFkcmFnb246ICdvcGVuc2VhZHJhZ29uL2J1aWx0LW9wZW5zZWFkcmFnb24vJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcGVuc2VhZHJhZ29uL29wZW5zZWFkcmFnb24uanMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZToge1xuICAgICAgICAgICAgbG9hZGVyczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdDogL1xcL29wZW5zZWFkcmFnb25cXC5qcyQvLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiAvXFwvYm93ZXJfY29tcG9uZW50c1xcL29wZW5zZWFkcmFnb25cXC8vLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI6ICdleHBvcnRzP09wZW5TZWFkcmFnb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iXX0=