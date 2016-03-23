'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9vcGVuc2VhZHJhZ29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFLZSxZQUFXO0FBQ3RCLFdBQU8sOEJBQW9CLEtBQXBCLENBQTBCO0FBQzdCLGlCQUFTO0FBQ0wsbUJBQU87O0FBRUgsK0JBQWUsdUNBQ0MsZ0NBREQ7YUFGbkI7U0FESjtBQU9BLGdCQUFRO0FBQ0oscUJBQVMsQ0FDTDtBQUNJLHNCQUFNLHNCQUFOO0FBQ0EseUJBQVMscUNBQVQ7QUFDQSx3QkFBUSx1QkFBUjthQUpDLENBQVQ7U0FESjtLQVJHLENBQVAsQ0FEc0I7Q0FBWDs7QUFMZjs7OztBQUVBIiwiZmlsZSI6Im9wZW5zZWFkcmFnb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2VicGFja0NvbmZpZyBmcm9tICd3ZWJwYWNrLWNvbmZpZyc7XG5cbmltcG9ydCB7IGxvYWRlciB9IGZyb20gJy4uL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgV2VicGFja0NvbmZpZygpLm1lcmdlKHtcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICAgICAvLyBFbm91Z2ggb3BlbnNlYWRyYWdvbnM/XG4gICAgICAgICAgICAgICAgb3BlbnNlYWRyYWdvbjogJ29wZW5zZWFkcmFnb24vYnVpbHQtb3BlbnNlYWRyYWdvbi8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wZW5zZWFkcmFnb24vb3BlbnNlYWRyYWdvbi5qcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0OiAvXFwvb3BlbnNlYWRyYWdvblxcLmpzJC8sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IC9cXC9ib3dlcl9jb21wb25lbnRzXFwvb3BlbnNlYWRyYWdvblxcLy8sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjogJ2V4cG9ydHM/T3BlblNlYWRyYWdvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdfQ==