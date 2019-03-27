"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util");

var _default = (0, _util.rule)({
  test: require.resolve('jquery-migrate'),
  loader: 'imports-loader?jQuery=jquery,window=>global'
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9qcXVlcnktbWlncmF0ZS5qcyJdLCJuYW1lcyI6WyJ0ZXN0IiwicmVxdWlyZSIsInJlc29sdmUiLCJsb2FkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7ZUFHZSxnQkFDWDtBQUNJQSxFQUFBQSxJQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixnQkFBaEIsQ0FEVjtBQUVJQyxFQUFBQSxNQUFNLEVBQUU7QUFGWixDQURXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBydWxlIH0gZnJvbSAnLi4vdXRpbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgcnVsZShcbiAgICB7XG4gICAgICAgIHRlc3Q6IHJlcXVpcmUucmVzb2x2ZSgnanF1ZXJ5LW1pZ3JhdGUnKSxcbiAgICAgICAgbG9hZGVyOiAnaW1wb3J0cy1sb2FkZXI/alF1ZXJ5PWpxdWVyeSx3aW5kb3c9Pmdsb2JhbCdcbiAgICB9XG4pO1xuIl19