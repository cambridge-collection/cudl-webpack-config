'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return new _webpackConfig2.default().merge({
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

var _webpackConfig = require('webpack-config');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9qcXVlcnktcGFnaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFLZSxZQUFXO0FBQ3RCLFdBQU8sOEJBQW9CLEtBQXBCLENBQTBCO0FBQzdCLGlCQUFTO0FBQ0wsbUJBQU87OztBQUdILGlDQUFpQixzQkFBakI7YUFISjtTQURKO0FBT0EsZ0JBQVE7QUFDSixxQkFBUyxDQUNMO0FBQ0ksc0JBQU0sdUJBQU47QUFDQSx5QkFBUyw4QkFBVDtBQUNBLHdCQUFRLG9DQUFSO2FBSkMsQ0FBVDtTQURKO0tBUkcsQ0FBUCxDQURzQjtDQUFYOztBQUxmOzs7O0FBRUEiLCJmaWxlIjoianF1ZXJ5LXBhZ2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWJwYWNrQ29uZmlnIGZyb20gJ3dlYnBhY2stY29uZmlnJztcblxuaW1wb3J0IHsgbG9hZGVyIH0gZnJvbSAnLi4vdXRpbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBXZWJwYWNrQ29uZmlnKCkubWVyZ2Uoe1xuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgICAgIC8vIEFsaWFzIHRoZSBtYWluIGZpbGUgYXMgXCJwYWdpbmdcIiBpcyB1bmNsZWFyIGFuZCB0eXBpbmdcbiAgICAgICAgICAgICAgICAvLyBpbXBvcnQgJ3BhZ2luZy9qcXVlcnkucGFnaW5nJyBpbiBjb2RlIGlzIGFubm95aW5nLlxuICAgICAgICAgICAgICAgICdqcXVlcnktcGFnaW5nJzogJ3BhZ2luZy9qcXVlcnkucGFnaW5nJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0OiAvXFwvanF1ZXJ5XFwucGFnaW5nXFwuanMkLyxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogL1xcL2Jvd2VyX2NvbXBvbmVudHNcXC9wYWdpbmdcXC8vLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI6ICdpbXBvcnRzP2pRdWVyeT1qcXVlcnksdGhpcz0+Z2xvYmFsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl19