"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util");

var _default = (0, _util.rule)({
  test: /\/jquery.fancybox.js$/,
  include: /\/bower_components\/fancybox\/source\//,
  loader: 'imports-loader?' + 'window=>global,document=>window.document,jQuery=jquery'
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9mYW5jeWJveC5qcyJdLCJuYW1lcyI6WyJ0ZXN0IiwiaW5jbHVkZSIsImxvYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztlQUdlLGdCQUNYO0FBQ0lBLEVBQUFBLElBQUksRUFBRSx1QkFEVjtBQUVJQyxFQUFBQSxPQUFPLEVBQUUsd0NBRmI7QUFHSUMsRUFBQUEsTUFBTSxFQUFFLG9CQUNKO0FBSlIsQ0FEVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcnVsZSB9IGZyb20gJy4uL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJ1bGUoXG4gICAge1xuICAgICAgICB0ZXN0OiAvXFwvanF1ZXJ5LmZhbmN5Ym94LmpzJC8sXG4gICAgICAgIGluY2x1ZGU6IC9cXC9ib3dlcl9jb21wb25lbnRzXFwvZmFuY3lib3hcXC9zb3VyY2VcXC8vLFxuICAgICAgICBsb2FkZXI6ICdpbXBvcnRzLWxvYWRlcj8nICtcbiAgICAgICAgICAgICd3aW5kb3c9Pmdsb2JhbCxkb2N1bWVudD0+d2luZG93LmRvY3VtZW50LGpRdWVyeT1qcXVlcnknXG4gICAgfVxuKTtcbiJdfQ==