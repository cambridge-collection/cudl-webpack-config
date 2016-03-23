'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shim = shim;

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _es6modules = require('./es6modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleTemplates = ['%s-webpack-shim', '%s-web-shim', '%s-shim', '%s'];

function resolveShim(name, templates) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = templates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var template = _step.value;

            var expanded = _util2.default.format(template, name);
            try {
                return require.resolve(expanded);
            } catch (e) {}
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    throw new Error('Cannot find shim: ' + JSON.stringify(name));
}

function shim(shim, shimOptions) {
    if ((0, _isString2.default)(shim)) {
        shim = (0, _es6modules.getDefault)(require(resolveShim(shim, moduleTemplates)));
    }

    return shim(shimOptions);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQXlCZ0I7O0FBekJoQjs7OztBQUVBOzs7O0FBRUE7Ozs7QUFHQSxJQUFNLGtCQUFrQixDQUNwQixpQkFEb0IsRUFFcEIsYUFGb0IsRUFHcEIsU0FIb0IsRUFJcEIsSUFKb0IsQ0FBbEI7O0FBT04sU0FBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCLFNBQTNCLEVBQXNDOzs7Ozs7QUFDbEMsNkJBQW9CLG1DQUFwQixvR0FBK0I7Z0JBQXZCLHVCQUF1Qjs7QUFDM0IsZ0JBQUksV0FBVyxlQUFLLE1BQUwsQ0FBWSxRQUFaLEVBQXNCLElBQXRCLENBQVgsQ0FEdUI7QUFFM0IsZ0JBQUk7QUFDQSx1QkFBTyxRQUFRLE9BQVIsQ0FBZ0IsUUFBaEIsQ0FBUCxDQURBO2FBQUosQ0FHQSxPQUFNLENBQU4sRUFBUyxFQUFUO1NBTEo7Ozs7Ozs7Ozs7Ozs7O0tBRGtDOztBQVFsQyxVQUFNLElBQUksS0FBSix3QkFBK0IsS0FBSyxTQUFMLENBQWUsSUFBZixDQUEvQixDQUFOLENBUmtDO0NBQXRDOztBQVdPLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFBb0IsV0FBcEIsRUFBaUM7QUFDcEMsUUFBRyx3QkFBUyxJQUFULENBQUgsRUFBbUI7QUFDZixlQUFPLDRCQUFXLFFBQVEsWUFBWSxJQUFaLEVBQWtCLGVBQWxCLENBQVIsQ0FBWCxDQUFQLENBRGU7S0FBbkI7O0FBSUEsV0FBTyxLQUFLLFdBQUwsQ0FBUCxDQUxvQztDQUFqQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuXG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2lzU3RyaW5nJztcblxuaW1wb3J0IHsgZ2V0RGVmYXVsdCB9IGZyb20gJy4vZXM2bW9kdWxlcyc7XG5cblxuY29uc3QgbW9kdWxlVGVtcGxhdGVzID0gW1xuICAgICclcy13ZWJwYWNrLXNoaW0nLFxuICAgICclcy13ZWItc2hpbScsXG4gICAgJyVzLXNoaW0nLFxuICAgICclcydcbl1cblxuZnVuY3Rpb24gcmVzb2x2ZVNoaW0obmFtZSwgdGVtcGxhdGVzKSB7XG4gICAgZm9yKGxldCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXMpIHtcbiAgICAgICAgbGV0IGV4cGFuZGVkID0gdXRpbC5mb3JtYXQodGVtcGxhdGUsIG5hbWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmUucmVzb2x2ZShleHBhbmRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge31cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBzaGltOiAke0pTT04uc3RyaW5naWZ5KG5hbWUpfWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltKHNoaW0sIHNoaW1PcHRpb25zKSB7XG4gICAgaWYoaXNTdHJpbmcoc2hpbSkpIHtcbiAgICAgICAgc2hpbSA9IGdldERlZmF1bHQocmVxdWlyZShyZXNvbHZlU2hpbShzaGltLCBtb2R1bGVUZW1wbGF0ZXMpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoaW0oc2hpbU9wdGlvbnMpO1xufVxuIl19