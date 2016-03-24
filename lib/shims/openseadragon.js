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
                after: '// Clean up our intercepting property\n\'delete window.OpenSeadragon;\'\n'
            }
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9vcGVuc2VhZHJhZ29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBSWdCOztrQkFpREQsVUFBUyxPQUFULEVBQWtCO0FBQzdCLFFBQUcsWUFBVyxPQUFYLEVBQW9CO0FBQ25CLGVBQU8sWUFBUCxDQURtQjtLQUF2Qjs7QUFJQSxXQUFPLDhCQUFvQixLQUFwQixDQUEwQjtBQUM3QixpQkFBUztBQUNMLG1CQUFPOztBQUVILCtCQUFlLHVDQUNDLGdDQUREO2FBRm5CO1NBREo7QUFPQSxnQkFBUTtBQUNKLHFCQUFTLENBQ0w7QUFDSSxzQkFBTSxzQkFBTjtBQUNBLHlCQUFTLHFDQUFUO0FBQ0Esd0JBQVEsdUJBQVI7YUFKQyxDQUFUO1NBREo7S0FSRyxDQUFQLENBTDZCO0NBQWxCOztBQXJEZjs7OztBQUVBOzs7O0FBRU8sU0FBUyxVQUFULEdBQXNCOzs7O0FBSXpCLFFBQUksYUFBYSxzQ0FBYixDQUpxQjs7QUFNekIsV0FBTyw4QkFBb0IsS0FBcEIsQ0FBMEI7QUFDN0IsZ0JBQVE7QUFDSixxQkFBUyxDQUNMO0FBQ0kseUJBQVMsVUFBVDtBQUNBLHNCQUFNLFdBQU47QUFDQSx5QkFBUyxxQkFBVDtBQUNBLHdCQUFRLDBDQUFSO2FBTEMsRUFPTDtBQUNJLHlCQUFTLFVBQVQ7QUFDQSxzQkFBTSxzQkFBTjtBQUNBLHlCQUFTLENBQ0wsd0JBREssRUFFTCx1QkFGSyxFQUdMLCtCQUhLLENBQVQ7YUFWQyxDQUFUO1NBREo7QUFtQkEsY0FBTTtBQUNGLHdDQUE0QjtBQUN4QixtY0FEd0I7QUFheEIsa0dBYndCO2FBQTVCO1NBREo7S0FwQkcsQ0FBUCxDQU55QjtDQUF0QiIsImZpbGUiOiJvcGVuc2VhZHJhZ29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYnBhY2tDb25maWcgZnJvbSAnd2VicGFjay1jb25maWcnO1xuXG5pbXBvcnQgeyBsb2FkZXJzIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltXzJfMV8wKCkge1xuICAgIC8vIE9wZW5TZWFkcmFnb24gc3RpbGwgaGFzIG5vbi1zdGFuZGFyZCBwYWNrYWdpbmcgd2hpY2ggcmVxdWlyZXMgbG90cyBvZlxuICAgIC8vIGhhY2tpbmcuIFRoZXkncmUgYWJvdXQgdG8gZG8gYSByZWxlYXNlIG9uIE5QTSB3aGljaCBzaG91bGQgYmUgbW9yZVxuICAgIC8vIHJlZ3VsYXIuLi5cbiAgICBsZXQgZGlyUGF0dGVybiA9IC9cXC9ub2RlX21vZHVsZXNcXC9PcGVuU2VhZHJhZ29uXFwvc3JjXFwvLztcblxuICAgIHJldHVybiBuZXcgV2VicGFja0NvbmZpZygpLm1lcmdlKHtcbiAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiBkaXJQYXR0ZXJuLFxuICAgICAgICAgICAgICAgICAgICB0ZXN0OiAvXFwvLipcXC5qcyQvLFxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlOiAvXFwvb3BlbnNlYWRyYWdvblxcLmpzLyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyOiAnaW1wb3J0cz9PcGVuU2VhZHJhZ29uPS4vb3BlbnNlYWRyYWdvbi5qcydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogZGlyUGF0dGVybixcbiAgICAgICAgICAgICAgICAgICAgdGVzdDogL1xcL29wZW5zZWFkcmFnb25cXC5qcyQvLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnaW1wb3J0cz93aW5kb3c9Pmdsb2JhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZXhwb3J0cz9PcGVuU2VhZHJhZ29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd3cmFwP3NoaW0tb3BlbnNlYWRyYWdvbi0yLjEuMCdcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgd3JhcDoge1xuICAgICAgICAgICAgJ3NoaW0tb3BlbnNlYWRyYWdvbi0yLjEuMCc6IHtcbiAgICAgICAgICAgICAgICBiZWZvcmU6IGBcXFxuLy8gUmVkaXJlY3QgYXNzaWdubWVudCBvZiBPcGVuU2VhZHJhZ29uIGdsb2JhbCB0byBsb2NhbCB2YXIuIFRoaXMgaXMgcmVxdWlyZWRcbi8vIGFzIG90aGVyd2lzZSB3ZSBjYW4ndCBhc3NpZ24gdGhlIE9wZW5TZWFkcmFnb24gbG9jYWwgYmVmb3JlIGl0J3MgcGFzc2VkIHRvXG4vLyB0aGUgbWFpbiBtb2R1bGUgd3JhcHBpbmcgZnVuY3Rpb24uXG52YXIgT3BlblNlYWRyYWdvbjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csICdPcGVuU2VhZHJhZ29uJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBPcGVuU2VhZHJhZ29uOyB9LFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHsgT3BlblNlYWRyYWdvbiA9IHZhbHVlOyB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG59KTtcbmAsXG4gICAgICAgICAgICAgICAgYWZ0ZXI6IGBcXFxuLy8gQ2xlYW4gdXAgb3VyIGludGVyY2VwdGluZyBwcm9wZXJ0eVxuJ2RlbGV0ZSB3aW5kb3cuT3BlblNlYWRyYWdvbjsnXG5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmVyc2lvbikge1xuICAgIGlmKHZlcnNpb24gPT09JzIuMS4wJykge1xuICAgICAgICByZXR1cm4gc2hpbV8yXzFfMCgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgV2VicGFja0NvbmZpZygpLm1lcmdlKHtcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICAgICAvLyBFbm91Z2ggb3BlbnNlYWRyYWdvbnM/XG4gICAgICAgICAgICAgICAgb3BlbnNlYWRyYWdvbjogJ29wZW5zZWFkcmFnb24vYnVpbHQtb3BlbnNlYWRyYWdvbi8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wZW5zZWFkcmFnb24vb3BlbnNlYWRyYWdvbi5qcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0OiAvXFwvb3BlbnNlYWRyYWdvblxcLmpzJC8sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IC9cXC9ib3dlcl9jb21wb25lbnRzXFwvb3BlbnNlYWRyYWdvblxcLy8sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjogJ2V4cG9ydHM/T3BlblNlYWRyYWdvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuIl19