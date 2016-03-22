'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _util = require('../util');

exports['default'] = (0, _util.loaders)([{
    test: /\/\w+\.js$/,
    include: /\/node_modules\/bootstrap\/js\//,
    loader: 'imports?jQuery=jquery'
}, {
    test: /\/[\w-]+\.less$/,
    include: /\/node_modules\/bootstrap\/less\//,
    loader: 'style-loader!css-loader?sourceMap!less-loader?sourceMap'
}]);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9ib290c3RyYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O29CQUF3QixTQUFTOztxQkFHbEIsbUJBQVEsQ0FDbkI7QUFDSSxRQUFJLEVBQUUsWUFBWTtBQUNsQixXQUFPLEVBQUUsaUNBQWlDO0FBQzFDLFVBQU0sRUFBRSx1QkFBdUI7Q0FDbEMsRUFDRDtBQUNJLFFBQUksRUFBRSxpQkFBaUI7QUFDdkIsV0FBTyxFQUFFLG1DQUFtQztBQUM1QyxVQUFNLEVBQUUseURBQXlEO0NBQ3BFLENBQ0osQ0FBQyIsImZpbGUiOiJib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkZXJzIH0gZnJvbSAnLi4vdXRpbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGVycyhbXG4gICAge1xuICAgICAgICB0ZXN0OiAvXFwvXFx3K1xcLmpzJC8sXG4gICAgICAgIGluY2x1ZGU6IC9cXC9ub2RlX21vZHVsZXNcXC9ib290c3RyYXBcXC9qc1xcLy8sXG4gICAgICAgIGxvYWRlcjogJ2ltcG9ydHM/alF1ZXJ5PWpxdWVyeSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGVzdDogL1xcL1tcXHctXStcXC5sZXNzJC8sXG4gICAgICAgIGluY2x1ZGU6IC9cXC9ub2RlX21vZHVsZXNcXC9ib290c3RyYXBcXC9sZXNzXFwvLyxcbiAgICAgICAgbG9hZGVyOiAnc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIWxlc3MtbG9hZGVyP3NvdXJjZU1hcCdcbiAgICB9XG5dKTtcbiJdfQ==