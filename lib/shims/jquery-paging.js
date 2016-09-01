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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9qcXVlcnktcGFnaW5nLmpzIl0sIm5hbWVzIjpbIm1lcmdlIiwicmVzb2x2ZSIsImFsaWFzIiwibW9kdWxlIiwibG9hZGVycyIsInRlc3QiLCJpbmNsdWRlIiwibG9hZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBS2UsWUFBVztBQUN0QixXQUFPLDhCQUFvQkEsS0FBcEIsQ0FBMEI7QUFDN0JDLGlCQUFTO0FBQ0xDLG1CQUFPO0FBQ0g7QUFDQTtBQUNBLGlDQUFpQjtBQUhkO0FBREYsU0FEb0I7QUFRN0JDLGdCQUFRO0FBQ0pDLHFCQUFTLENBQ0w7QUFDSUMsc0JBQU0sdUJBRFY7QUFFSUMseUJBQVMsOEJBRmI7QUFHSUMsd0JBQVE7QUFIWixhQURLO0FBREw7QUFScUIsS0FBMUIsQ0FBUDtBQWtCSCxDOztBQXhCRDs7OztBQUVBIiwiZmlsZSI6ImpxdWVyeS1wYWdpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2VicGFja0NvbmZpZyBmcm9tICd3ZWJwYWNrLWNvbmZpZyc7XG5cbmltcG9ydCB7IGxvYWRlciB9IGZyb20gJy4uL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgV2VicGFja0NvbmZpZygpLm1lcmdlKHtcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICAgICAvLyBBbGlhcyB0aGUgbWFpbiBmaWxlIGFzIFwicGFnaW5nXCIgaXMgdW5jbGVhciBhbmQgdHlwaW5nXG4gICAgICAgICAgICAgICAgLy8gaW1wb3J0ICdwYWdpbmcvanF1ZXJ5LnBhZ2luZycgaW4gY29kZSBpcyBhbm5veWluZy5cbiAgICAgICAgICAgICAgICAnanF1ZXJ5LXBhZ2luZyc6ICdwYWdpbmcvanF1ZXJ5LnBhZ2luZycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZToge1xuICAgICAgICAgICAgbG9hZGVyczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdDogL1xcL2pxdWVyeVxcLnBhZ2luZ1xcLmpzJC8sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IC9cXC9ib3dlcl9jb21wb25lbnRzXFwvcGFnaW5nXFwvLyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyOiAnaW1wb3J0cz9qUXVlcnk9anF1ZXJ5LHRoaXM9Pmdsb2JhbCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdfQ==