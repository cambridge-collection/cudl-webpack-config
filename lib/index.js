"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shim = shim;

var _util = _interopRequireDefault(require("util"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _es6modules = require("./es6modules");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleTemplates = ['%s-webpack-shim', '%s-web-shim', '%s-shim', '%s'];

function resolveShim(name, templates) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = templates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var template = _step.value;

      var expanded = _util.default.format(template, name);

      try {
        return require.resolve(expanded);
      } catch (e) {}
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  throw new Error("Cannot find shim: ".concat(JSON.stringify(name)));
}

function shim(shim) {
  if ((0, _isString.default)(shim)) {
    shim = (0, _es6modules.getDefault)(require(resolveShim(shim, moduleTemplates)));
  }

  for (var _len = arguments.length, shimOptions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    shimOptions[_key - 1] = arguments[_key];
  }

  return shim.apply(void 0, shimOptions);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGVUZW1wbGF0ZXMiLCJyZXNvbHZlU2hpbSIsIm5hbWUiLCJ0ZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsImV4cGFuZGVkIiwidXRpbCIsImZvcm1hdCIsInJlcXVpcmUiLCJyZXNvbHZlIiwiZSIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsInNoaW0iLCJzaGltT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLENBQ3BCLGlCQURvQixFQUVwQixhQUZvQixFQUdwQixTQUhvQixFQUlwQixJQUpvQixDQUF4Qjs7QUFPQSxTQUFTQyxXQUFULENBQXFCQyxJQUFyQixFQUEyQkMsU0FBM0IsRUFBc0M7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbEMseUJBQW9CQSxTQUFwQiw4SEFBK0I7QUFBQSxVQUF2QkMsUUFBdUI7O0FBQzNCLFVBQUlDLFFBQVEsR0FBR0MsY0FBS0MsTUFBTCxDQUFZSCxRQUFaLEVBQXNCRixJQUF0QixDQUFmOztBQUNBLFVBQUk7QUFDQSxlQUFPTSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JKLFFBQWhCLENBQVA7QUFDSCxPQUZELENBR0EsT0FBTUssQ0FBTixFQUFTLENBQUU7QUFDZDtBQVBpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFsQyxRQUFNLElBQUlDLEtBQUosNkJBQStCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsSUFBZixDQUEvQixFQUFOO0FBQ0g7O0FBRU0sU0FBU1ksSUFBVCxDQUFjQSxJQUFkLEVBQW9DO0FBQ3ZDLE1BQUcsdUJBQVNBLElBQVQsQ0FBSCxFQUFtQjtBQUNmQSxJQUFBQSxJQUFJLEdBQUcsNEJBQVdOLE9BQU8sQ0FBQ1AsV0FBVyxDQUFDYSxJQUFELEVBQU9kLGVBQVAsQ0FBWixDQUFsQixDQUFQO0FBQ0g7O0FBSHNDLG9DQUFiZSxXQUFhO0FBQWJBLElBQUFBLFdBQWE7QUFBQTs7QUFLdkMsU0FBT0QsSUFBSSxNQUFKLFNBQVFDLFdBQVIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5cbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuXG5pbXBvcnQgeyBnZXREZWZhdWx0IH0gZnJvbSAnLi9lczZtb2R1bGVzJztcblxuXG5jb25zdCBtb2R1bGVUZW1wbGF0ZXMgPSBbXG4gICAgJyVzLXdlYnBhY2stc2hpbScsXG4gICAgJyVzLXdlYi1zaGltJyxcbiAgICAnJXMtc2hpbScsXG4gICAgJyVzJ1xuXVxuXG5mdW5jdGlvbiByZXNvbHZlU2hpbShuYW1lLCB0ZW1wbGF0ZXMpIHtcbiAgICBmb3IobGV0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgICAgICBsZXQgZXhwYW5kZWQgPSB1dGlsLmZvcm1hdCh0ZW1wbGF0ZSwgbmFtZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWlyZS5yZXNvbHZlKGV4cGFuZGVkKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7fVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIHNoaW06ICR7SlNPTi5zdHJpbmdpZnkobmFtZSl9YClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaW0oc2hpbSwgLi4uc2hpbU9wdGlvbnMpIHtcbiAgICBpZihpc1N0cmluZyhzaGltKSkge1xuICAgICAgICBzaGltID0gZ2V0RGVmYXVsdChyZXF1aXJlKHJlc29sdmVTaGltKHNoaW0sIG1vZHVsZVRlbXBsYXRlcykpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hpbSguLi5zaGltT3B0aW9ucyk7XG59XG4iXX0=