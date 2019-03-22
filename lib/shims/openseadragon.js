"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _webpackConfig = require("webpack-config");

var _semver = require("semver");

var _util = require("../util");

var _webpack = _interopRequireDefault(require("webpack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OSD_2_SHIM = {
  before: "// Redirect assignment of OpenSeadragon global to local var. This is required\n// as otherwise we can't assign the OpenSeadragon local before it's passed to\n// the main module wrapping function.\nvar OpenSeadragon;\nObject.defineProperty(window, 'OpenSeadragon', {\n    get: function() { return OpenSeadragon; },\n    set: function(value) { OpenSeadragon = value; },\n    configurable: true,\n    enumerable: true\n});\n",
  after: "// Clean up our intercepting property\ndelete window.OpenSeadragon;\n"
};

function shim_2_2() {
  return new _webpackConfig.Config().merge({
    module: {
      rules: [{
        include: require.resolve('openseadragon'),
        use: [// Disable AMD define used by OSD
        'imports-loader?window=>global&define=>false', 'exports-loader?OpenSeadragon', 'wrap-loader?shim-openseadragon-2.x']
      }]
    },
    plugins: [new _webpack.default.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        wrap: {
          'shim-openseadragon-2.x': OSD_2_SHIM
        }
      }
    })]
  });
}

function shim_2_1() {
  // OpenSeadragon < 2.2 had non-standard packaging which required lots of
  // hacking. ^2.2 has an NPM release, but contains only a concatenated file
  // as they don't use js modules internally yet.
  var dirPattern = /\/node_modules\/OpenSeadragon\/src\//;
  return new _webpackConfig.Config().merge({
    module: {
      rules: [{
        include: dirPattern,
        test: /\/.*\.js$/,
        exclude: /\/openseadragon\.js/,
        loader: 'imports-loader?OpenSeadragon=./openseadragon.js'
      }, {
        include: dirPattern,
        test: /\/openseadragon\.js$/,
        use: ['imports-loader?window=>global', 'exports-loader?OpenSeadragon', 'wrap-loader?shim-openseadragon-2.x']
      }]
    },
    plugins: [new _webpack.default.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        wrap: {
          'shim-openseadragon-2.x': OSD_2_SHIM
        }
      }
    })]
  });
}

function _default(version) {
  if ((0, _semver.satisfies)(version, '^2.2')) {
    return shim_2_2();
  } else if ((0, _semver.satisfies)(version, '^2')) {
    return shim_2_1();
  }

  return new _webpackConfig.Config().merge({
    resolve: {
      alias: {
        // Enough openseadragons?
        openseadragon: 'openseadragon/built-openseadragon/' + 'openseadragon/openseadragon.js'
      }
    },
    module: {
      rules: [{
        test: /\/openseadragon\.js$/,
        include: /\/bower_components\/openseadragon\//,
        loader: 'exports-loader?OpenSeadragon'
      }]
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9vcGVuc2VhZHJhZ29uLmpzIl0sIm5hbWVzIjpbIk9TRF8yX1NISU0iLCJiZWZvcmUiLCJhZnRlciIsInNoaW1fMl8yIiwiQ29uZmlnIiwibWVyZ2UiLCJtb2R1bGUiLCJydWxlcyIsImluY2x1ZGUiLCJyZXF1aXJlIiwicmVzb2x2ZSIsInVzZSIsInBsdWdpbnMiLCJ3ZWJwYWNrIiwiTG9hZGVyT3B0aW9uc1BsdWdpbiIsIm9wdGlvbnMiLCJ3cmFwIiwic2hpbV8yXzEiLCJkaXJQYXR0ZXJuIiwidGVzdCIsImV4Y2x1ZGUiLCJsb2FkZXIiLCJ2ZXJzaW9uIiwiYWxpYXMiLCJvcGVuc2VhZHJhZ29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUc7QUFDZkMsRUFBQUEsTUFBTSx5YUFEUztBQWFmQyxFQUFBQSxLQUFLO0FBYlUsQ0FBbkI7O0FBb0JBLFNBQVNDLFFBQVQsR0FBb0I7QUFDaEIsU0FBTyxJQUFJQyxxQkFBSixHQUFhQyxLQUFiLENBQW1CO0FBQ3RCQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFLENBQ0g7QUFDSUMsUUFBQUEsT0FBTyxFQUFFQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsZUFBaEIsQ0FEYjtBQUVJQyxRQUFBQSxHQUFHLEVBQUUsQ0FDRDtBQUNBLHFEQUZDLEVBR0QsOEJBSEMsRUFJRCxvQ0FKQztBQUZULE9BREc7QUFESCxLQURjO0FBY3RCQyxJQUFBQSxPQUFPLEVBQUUsQ0FDTCxJQUFJQyxpQkFBUUMsbUJBQVosQ0FBZ0M7QUFDNUI7QUFDQUMsTUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFFBQUFBLElBQUksRUFBQztBQUFDLG9DQUEwQmhCO0FBQTNCO0FBREE7QUFGbUIsS0FBaEMsQ0FESztBQWRhLEdBQW5CLENBQVA7QUF1Qkg7O0FBRUQsU0FBU2lCLFFBQVQsR0FBb0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLHNDQUFqQjtBQUVBLFNBQU8sSUFBSWQscUJBQUosR0FBYUMsS0FBYixDQUFtQjtBQUN0QkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0pDLE1BQUFBLEtBQUssRUFBRSxDQUNIO0FBQ0lDLFFBQUFBLE9BQU8sRUFBRVUsVUFEYjtBQUVJQyxRQUFBQSxJQUFJLEVBQUUsV0FGVjtBQUdJQyxRQUFBQSxPQUFPLEVBQUUscUJBSGI7QUFJSUMsUUFBQUEsTUFBTSxFQUFFO0FBSlosT0FERyxFQU9IO0FBQ0liLFFBQUFBLE9BQU8sRUFBRVUsVUFEYjtBQUVJQyxRQUFBQSxJQUFJLEVBQUUsc0JBRlY7QUFHSVIsUUFBQUEsR0FBRyxFQUFFLENBQ0QsK0JBREMsRUFFRCw4QkFGQyxFQUdELG9DQUhDO0FBSFQsT0FQRztBQURILEtBRGM7QUFvQnRCQyxJQUFBQSxPQUFPLEVBQUUsQ0FDTCxJQUFJQyxpQkFBUUMsbUJBQVosQ0FBZ0M7QUFDNUI7QUFDQUMsTUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFFBQUFBLElBQUksRUFBQztBQUFDLG9DQUEwQmhCO0FBQTNCO0FBREE7QUFGbUIsS0FBaEMsQ0FESztBQXBCYSxHQUFuQixDQUFQO0FBNkJIOztBQUVjLGtCQUFTc0IsT0FBVCxFQUFrQjtBQUM3QixNQUFHLHVCQUFVQSxPQUFWLEVBQW1CLE1BQW5CLENBQUgsRUFBK0I7QUFDM0IsV0FBT25CLFFBQVEsRUFBZjtBQUNILEdBRkQsTUFHSyxJQUFHLHVCQUFVbUIsT0FBVixFQUFtQixJQUFuQixDQUFILEVBQTZCO0FBQzlCLFdBQU9MLFFBQVEsRUFBZjtBQUNIOztBQUVELFNBQU8sSUFBSWIscUJBQUosR0FBYUMsS0FBYixDQUFtQjtBQUN0QkssSUFBQUEsT0FBTyxFQUFFO0FBQ0xhLE1BQUFBLEtBQUssRUFBRTtBQUNIO0FBQ0FDLFFBQUFBLGFBQWEsRUFBRSx1Q0FDQztBQUhiO0FBREYsS0FEYTtBQVF0QmxCLElBQUFBLE1BQU0sRUFBRTtBQUNKQyxNQUFBQSxLQUFLLEVBQUUsQ0FDSDtBQUNJWSxRQUFBQSxJQUFJLEVBQUUsc0JBRFY7QUFFSVgsUUFBQUEsT0FBTyxFQUFFLHFDQUZiO0FBR0lhLFFBQUFBLE1BQU0sRUFBRTtBQUhaLE9BREc7QUFESDtBQVJjLEdBQW5CLENBQVA7QUFrQkgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgfSBmcm9tICd3ZWJwYWNrLWNvbmZpZyc7XG5pbXBvcnQgeyBzYXRpc2ZpZXMgfSBmcm9tICdzZW12ZXInO1xuXG5pbXBvcnQgeyBydWxlcyB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjayc7XG5cbmNvbnN0IE9TRF8yX1NISU0gPSB7XG4gICAgYmVmb3JlOiBgXFxcbi8vIFJlZGlyZWN0IGFzc2lnbm1lbnQgb2YgT3BlblNlYWRyYWdvbiBnbG9iYWwgdG8gbG9jYWwgdmFyLiBUaGlzIGlzIHJlcXVpcmVkXG4vLyBhcyBvdGhlcndpc2Ugd2UgY2FuJ3QgYXNzaWduIHRoZSBPcGVuU2VhZHJhZ29uIGxvY2FsIGJlZm9yZSBpdCdzIHBhc3NlZCB0b1xuLy8gdGhlIG1haW4gbW9kdWxlIHdyYXBwaW5nIGZ1bmN0aW9uLlxudmFyIE9wZW5TZWFkcmFnb247XG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnT3BlblNlYWRyYWdvbicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gT3BlblNlYWRyYWdvbjsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7IE9wZW5TZWFkcmFnb24gPSB2YWx1ZTsgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxufSk7XG5gLFxuICAgIGFmdGVyOiBgXFxcbi8vIENsZWFuIHVwIG91ciBpbnRlcmNlcHRpbmcgcHJvcGVydHlcbmRlbGV0ZSB3aW5kb3cuT3BlblNlYWRyYWdvbjtcbmBcbn07XG5cblxuZnVuY3Rpb24gc2hpbV8yXzIoKSB7XG4gICAgcmV0dXJuIG5ldyBDb25maWcoKS5tZXJnZSh7XG4gICAgICAgIG1vZHVsZToge1xuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHJlcXVpcmUucmVzb2x2ZSgnb3BlbnNlYWRyYWdvbicpLFxuICAgICAgICAgICAgICAgICAgICB1c2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgQU1EIGRlZmluZSB1c2VkIGJ5IE9TRFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ltcG9ydHMtbG9hZGVyP3dpbmRvdz0+Z2xvYmFsJmRlZmluZT0+ZmFsc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2V4cG9ydHMtbG9hZGVyP09wZW5TZWFkcmFnb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dyYXAtbG9hZGVyP3NoaW0tb3BlbnNlYWRyYWdvbi0yLngnXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIG5ldyB3ZWJwYWNrLkxvYWRlck9wdGlvbnNQbHVnaW4oe1xuICAgICAgICAgICAgICAgIC8vIHRlc3Q6IC9cXC54eHgkLywgLy8gbWF5IGFwcGx5IHRoaXMgb25seSBmb3Igc29tZSBtb2R1bGVzXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB3cmFwOnsnc2hpbS1vcGVuc2VhZHJhZ29uLTIueCc6IE9TRF8yX1NISU19XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaGltXzJfMSgpIHtcbiAgICAvLyBPcGVuU2VhZHJhZ29uIDwgMi4yIGhhZCBub24tc3RhbmRhcmQgcGFja2FnaW5nIHdoaWNoIHJlcXVpcmVkIGxvdHMgb2ZcbiAgICAvLyBoYWNraW5nLiBeMi4yIGhhcyBhbiBOUE0gcmVsZWFzZSwgYnV0IGNvbnRhaW5zIG9ubHkgYSBjb25jYXRlbmF0ZWQgZmlsZVxuICAgIC8vIGFzIHRoZXkgZG9uJ3QgdXNlIGpzIG1vZHVsZXMgaW50ZXJuYWxseSB5ZXQuXG4gICAgbGV0IGRpclBhdHRlcm4gPSAvXFwvbm9kZV9tb2R1bGVzXFwvT3BlblNlYWRyYWdvblxcL3NyY1xcLy87XG5cbiAgICByZXR1cm4gbmV3IENvbmZpZygpLm1lcmdlKHtcbiAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogZGlyUGF0dGVybixcbiAgICAgICAgICAgICAgICAgICAgdGVzdDogL1xcLy4qXFwuanMkLyxcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZTogL1xcL29wZW5zZWFkcmFnb25cXC5qcy8sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjogJ2ltcG9ydHMtbG9hZGVyP09wZW5TZWFkcmFnb249Li9vcGVuc2VhZHJhZ29uLmpzJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiBkaXJQYXR0ZXJuLFxuICAgICAgICAgICAgICAgICAgICB0ZXN0OiAvXFwvb3BlbnNlYWRyYWdvblxcLmpzJC8sXG4gICAgICAgICAgICAgICAgICAgIHVzZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2ltcG9ydHMtbG9hZGVyP3dpbmRvdz0+Z2xvYmFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdleHBvcnRzLWxvYWRlcj9PcGVuU2VhZHJhZ29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd3cmFwLWxvYWRlcj9zaGltLW9wZW5zZWFkcmFnb24tMi54J1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICBuZXcgd2VicGFjay5Mb2FkZXJPcHRpb25zUGx1Z2luKHtcbiAgICAgICAgICAgICAgICAvLyB0ZXN0OiAvXFwueHh4JC8sIC8vIG1heSBhcHBseSB0aGlzIG9ubHkgZm9yIHNvbWUgbW9kdWxlc1xuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcDp7J3NoaW0tb3BlbnNlYWRyYWdvbi0yLngnOiBPU0RfMl9TSElNfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICBdXG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICBpZihzYXRpc2ZpZXModmVyc2lvbiwgJ14yLjInKSkge1xuICAgICAgICByZXR1cm4gc2hpbV8yXzIoKTtcbiAgICB9XG4gICAgZWxzZSBpZihzYXRpc2ZpZXModmVyc2lvbiwgJ14yJykpIHtcbiAgICAgICAgcmV0dXJuIHNoaW1fMl8xKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBDb25maWcoKS5tZXJnZSh7XG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgLy8gRW5vdWdoIG9wZW5zZWFkcmFnb25zP1xuICAgICAgICAgICAgICAgIG9wZW5zZWFkcmFnb246ICdvcGVuc2VhZHJhZ29uL2J1aWx0LW9wZW5zZWFkcmFnb24vJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcGVuc2VhZHJhZ29uL29wZW5zZWFkcmFnb24uanMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZToge1xuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3Q6IC9cXC9vcGVuc2VhZHJhZ29uXFwuanMkLyxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogL1xcL2Jvd2VyX2NvbXBvbmVudHNcXC9vcGVuc2VhZHJhZ29uXFwvLyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyOiAnZXhwb3J0cy1sb2FkZXI/T3BlblNlYWRyYWdvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuIl19