"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _webpackConfig = require("webpack-config");

var _util = require("../util");

function _default() {
  return new _webpackConfig.Config().merge({
    resolve: {
      alias: {
        // Alias the main file as "paging" is unclear and typing
        // import 'paging/jquery.paging' in code is annoying.
        'jquery-paging': 'paging/jquery.paging'
      }
    },
    module: {
      rules: [{
        test: /\/jquery\.paging\.js$/,
        include: /\/bower_components\/paging\//,
        loader: 'imports-loader?jQuery=jquery,this=>global'
      }]
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9qcXVlcnktcGFnaW5nLmpzIl0sIm5hbWVzIjpbIkNvbmZpZyIsIm1lcmdlIiwicmVzb2x2ZSIsImFsaWFzIiwibW9kdWxlIiwicnVsZXMiLCJ0ZXN0IiwiaW5jbHVkZSIsImxvYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUdlLG9CQUFXO0FBQ3RCLFNBQU8sSUFBSUEscUJBQUosR0FBYUMsS0FBYixDQUFtQjtBQUN0QkMsSUFBQUEsT0FBTyxFQUFFO0FBQ0xDLE1BQUFBLEtBQUssRUFBRTtBQUNIO0FBQ0E7QUFDQSx5QkFBaUI7QUFIZDtBQURGLEtBRGE7QUFRdEJDLElBQUFBLE1BQU0sRUFBRTtBQUNKQyxNQUFBQSxLQUFLLEVBQUUsQ0FDSDtBQUNJQyxRQUFBQSxJQUFJLEVBQUUsdUJBRFY7QUFFSUMsUUFBQUEsT0FBTyxFQUFFLDhCQUZiO0FBR0lDLFFBQUFBLE1BQU0sRUFBRTtBQUhaLE9BREc7QUFESDtBQVJjLEdBQW5CLENBQVA7QUFrQkgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgfSBmcm9tICd3ZWJwYWNrLWNvbmZpZyc7XG5cbmltcG9ydCB7IHJ1bGUgfSBmcm9tICcuLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IENvbmZpZygpLm1lcmdlKHtcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICAgICAvLyBBbGlhcyB0aGUgbWFpbiBmaWxlIGFzIFwicGFnaW5nXCIgaXMgdW5jbGVhciBhbmQgdHlwaW5nXG4gICAgICAgICAgICAgICAgLy8gaW1wb3J0ICdwYWdpbmcvanF1ZXJ5LnBhZ2luZycgaW4gY29kZSBpcyBhbm5veWluZy5cbiAgICAgICAgICAgICAgICAnanF1ZXJ5LXBhZ2luZyc6ICdwYWdpbmcvanF1ZXJ5LnBhZ2luZycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZToge1xuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3Q6IC9cXC9qcXVlcnlcXC5wYWdpbmdcXC5qcyQvLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiAvXFwvYm93ZXJfY29tcG9uZW50c1xcL3BhZ2luZ1xcLy8sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjogJ2ltcG9ydHMtbG9hZGVyP2pRdWVyeT1qcXVlcnksdGhpcz0+Z2xvYmFsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl19