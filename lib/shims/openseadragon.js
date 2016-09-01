'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shim_2_1_0 = shim_2_1_0;

exports.default = function (version) {
    if (version === '2.1.0') {
        return shim_2_1_0();
    }

    return new _webpackConfig2.default().merge({
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

var _webpackConfig = require('webpack-config');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shim_2_1_0() {
    // OpenSeadragon still has non-standard packaging which requires lots of
    // hacking. They're about to do a release on NPM which should be more
    // regular...
    var dirPattern = /\/node_modules\/OpenSeadragon\/src\//;

    return new _webpackConfig2.default().merge({
        module: {
            loaders: [{
                include: dirPattern,
                test: /\/.*\.js$/,
                exclude: /\/openseadragon\.js/,
                loader: 'imports?OpenSeadragon=./openseadragon.js'
            }, {
                include: dirPattern,
                test: /\/openseadragon\.js$/,
                loaders: ['imports?window=>global', 'exports?OpenSeadragon', 'wrap?shim-openseadragon-2.1.0']
            }]
        },
        wrap: {
            'shim-openseadragon-2.1.0': {
                before: '// Redirect assignment of OpenSeadragon global to local var. This is required\n// as otherwise we can\'t assign the OpenSeadragon local before it\'s passed to\n// the main module wrapping function.\nvar OpenSeadragon;\nObject.defineProperty(window, \'OpenSeadragon\', {\n    get: function() { return OpenSeadragon; },\n    set: function(value) { OpenSeadragon = value; },\n    configurable: true,\n    enumerable: true\n});\n',
                after: '// Clean up our intercepting property\ndelete window.OpenSeadragon;\n'
            }
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9vcGVuc2VhZHJhZ29uLmpzIl0sIm5hbWVzIjpbInNoaW1fMl8xXzAiLCJ2ZXJzaW9uIiwibWVyZ2UiLCJyZXNvbHZlIiwiYWxpYXMiLCJvcGVuc2VhZHJhZ29uIiwibW9kdWxlIiwibG9hZGVycyIsInRlc3QiLCJpbmNsdWRlIiwibG9hZGVyIiwiZGlyUGF0dGVybiIsImV4Y2x1ZGUiLCJ3cmFwIiwiYmVmb3JlIiwiYWZ0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7O1FBSWdCQSxVLEdBQUFBLFU7O2tCQWlERCxVQUFTQyxPQUFULEVBQWtCO0FBQzdCLFFBQUdBLFlBQVcsT0FBZCxFQUF1QjtBQUNuQixlQUFPRCxZQUFQO0FBQ0g7O0FBRUQsV0FBTyw4QkFBb0JFLEtBQXBCLENBQTBCO0FBQzdCQyxpQkFBUztBQUNMQyxtQkFBTztBQUNIO0FBQ0FDLCtCQUFlLHVDQUNDO0FBSGI7QUFERixTQURvQjtBQVE3QkMsZ0JBQVE7QUFDSkMscUJBQVMsQ0FDTDtBQUNJQyxzQkFBTSxzQkFEVjtBQUVJQyx5QkFBUyxxQ0FGYjtBQUdJQyx3QkFBUTtBQUhaLGFBREs7QUFETDtBQVJxQixLQUExQixDQUFQO0FBa0JILEM7O0FBNUVEOzs7O0FBRUE7Ozs7QUFFTyxTQUFTVixVQUFULEdBQXNCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFFBQUlXLGFBQWEsc0NBQWpCOztBQUVBLFdBQU8sOEJBQW9CVCxLQUFwQixDQUEwQjtBQUM3QkksZ0JBQVE7QUFDSkMscUJBQVMsQ0FDTDtBQUNJRSx5QkFBU0UsVUFEYjtBQUVJSCxzQkFBTSxXQUZWO0FBR0lJLHlCQUFTLHFCQUhiO0FBSUlGLHdCQUFRO0FBSlosYUFESyxFQU9MO0FBQ0lELHlCQUFTRSxVQURiO0FBRUlILHNCQUFNLHNCQUZWO0FBR0lELHlCQUFTLENBQ0wsd0JBREssRUFFTCx1QkFGSyxFQUdMLCtCQUhLO0FBSGIsYUFQSztBQURMLFNBRHFCO0FBb0I3Qk0sY0FBTTtBQUNGLHdDQUE0QjtBQUN4QkMsbWNBRHdCO0FBYXhCQztBQWJ3QjtBQUQxQjtBQXBCdUIsS0FBMUIsQ0FBUDtBQXlDSCIsImZpbGUiOiJvcGVuc2VhZHJhZ29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYnBhY2tDb25maWcgZnJvbSAnd2VicGFjay1jb25maWcnO1xuXG5pbXBvcnQgeyBsb2FkZXJzIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltXzJfMV8wKCkge1xuICAgIC8vIE9wZW5TZWFkcmFnb24gc3RpbGwgaGFzIG5vbi1zdGFuZGFyZCBwYWNrYWdpbmcgd2hpY2ggcmVxdWlyZXMgbG90cyBvZlxuICAgIC8vIGhhY2tpbmcuIFRoZXkncmUgYWJvdXQgdG8gZG8gYSByZWxlYXNlIG9uIE5QTSB3aGljaCBzaG91bGQgYmUgbW9yZVxuICAgIC8vIHJlZ3VsYXIuLi5cbiAgICBsZXQgZGlyUGF0dGVybiA9IC9cXC9ub2RlX21vZHVsZXNcXC9PcGVuU2VhZHJhZ29uXFwvc3JjXFwvLztcblxuICAgIHJldHVybiBuZXcgV2VicGFja0NvbmZpZygpLm1lcmdlKHtcbiAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiBkaXJQYXR0ZXJuLFxuICAgICAgICAgICAgICAgICAgICB0ZXN0OiAvXFwvLipcXC5qcyQvLFxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlOiAvXFwvb3BlbnNlYWRyYWdvblxcLmpzLyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyOiAnaW1wb3J0cz9PcGVuU2VhZHJhZ29uPS4vb3BlbnNlYWRyYWdvbi5qcydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogZGlyUGF0dGVybixcbiAgICAgICAgICAgICAgICAgICAgdGVzdDogL1xcL29wZW5zZWFkcmFnb25cXC5qcyQvLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnaW1wb3J0cz93aW5kb3c9Pmdsb2JhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZXhwb3J0cz9PcGVuU2VhZHJhZ29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd3cmFwP3NoaW0tb3BlbnNlYWRyYWdvbi0yLjEuMCdcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgd3JhcDoge1xuICAgICAgICAgICAgJ3NoaW0tb3BlbnNlYWRyYWdvbi0yLjEuMCc6IHtcbiAgICAgICAgICAgICAgICBiZWZvcmU6IGBcXFxuLy8gUmVkaXJlY3QgYXNzaWdubWVudCBvZiBPcGVuU2VhZHJhZ29uIGdsb2JhbCB0byBsb2NhbCB2YXIuIFRoaXMgaXMgcmVxdWlyZWRcbi8vIGFzIG90aGVyd2lzZSB3ZSBjYW4ndCBhc3NpZ24gdGhlIE9wZW5TZWFkcmFnb24gbG9jYWwgYmVmb3JlIGl0J3MgcGFzc2VkIHRvXG4vLyB0aGUgbWFpbiBtb2R1bGUgd3JhcHBpbmcgZnVuY3Rpb24uXG52YXIgT3BlblNlYWRyYWdvbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csICdPcGVuU2VhZHJhZ29uJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBPcGVuU2VhZHJhZ29uOyB9LFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHsgT3BlblNlYWRyYWdvbiA9IHZhbHVlOyB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG59KTtcbmAsXG4gICAgICAgICAgICAgICAgYWZ0ZXI6IGBcXFxuLy8gQ2xlYW4gdXAgb3VyIGludGVyY2VwdGluZyBwcm9wZXJ0eVxuZGVsZXRlIHdpbmRvdy5PcGVuU2VhZHJhZ29uO1xuYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICBpZih2ZXJzaW9uID09PScyLjEuMCcpIHtcbiAgICAgICAgcmV0dXJuIHNoaW1fMl8xXzAoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFdlYnBhY2tDb25maWcoKS5tZXJnZSh7XG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgLy8gRW5vdWdoIG9wZW5zZWFkcmFnb25zP1xuICAgICAgICAgICAgICAgIG9wZW5zZWFkcmFnb246ICdvcGVuc2VhZHJhZ29uL2J1aWx0LW9wZW5zZWFkcmFnb24vJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcGVuc2VhZHJhZ29uL29wZW5zZWFkcmFnb24uanMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZToge1xuICAgICAgICAgICAgbG9hZGVyczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdDogL1xcL29wZW5zZWFkcmFnb25cXC5qcyQvLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiAvXFwvYm93ZXJfY29tcG9uZW50c1xcL29wZW5zZWFkcmFnb25cXC8vLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI6ICdleHBvcnRzP09wZW5TZWFkcmFnb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbiJdfQ==