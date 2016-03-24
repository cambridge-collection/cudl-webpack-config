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

function shim(shim) {
    if ((0, _isString2.default)(shim)) {
        shim = (0, _es6modules.getDefault)(require(resolveShim(shim, moduleTemplates)));
    }

    for (var _len = arguments.length, shimOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        shimOptions[_key - 1] = arguments[_key];
    }

    return shim.apply(undefined, shimOptions);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztRQXlCZ0I7O0FBekJoQjs7OztBQUVBOzs7O0FBRUE7Ozs7QUFHQSxJQUFNLGtCQUFrQixDQUNwQixpQkFEb0IsRUFFcEIsYUFGb0IsRUFHcEIsU0FIb0IsRUFJcEIsSUFKb0IsQ0FBbEI7O0FBT04sU0FBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCLFNBQTNCLEVBQXNDOzs7Ozs7QUFDbEMsNkJBQW9CLG1DQUFwQixvR0FBK0I7Z0JBQXZCLHVCQUF1Qjs7QUFDM0IsZ0JBQUksV0FBVyxlQUFLLE1BQUwsQ0FBWSxRQUFaLEVBQXNCLElBQXRCLENBQVgsQ0FEdUI7QUFFM0IsZ0JBQUk7QUFDQSx1QkFBTyxRQUFRLE9BQVIsQ0FBZ0IsUUFBaEIsQ0FBUCxDQURBO2FBQUosQ0FHQSxPQUFNLENBQU4sRUFBUyxFQUFUO1NBTEo7Ozs7Ozs7Ozs7Ozs7O0tBRGtDOztBQVFsQyxVQUFNLElBQUksS0FBSix3QkFBK0IsS0FBSyxTQUFMLENBQWUsSUFBZixDQUEvQixDQUFOLENBUmtDO0NBQXRDOztBQVdPLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFBb0M7QUFDdkMsUUFBRyx3QkFBUyxJQUFULENBQUgsRUFBbUI7QUFDZixlQUFPLDRCQUFXLFFBQVEsWUFBWSxJQUFaLEVBQWtCLGVBQWxCLENBQVIsQ0FBWCxDQUFQLENBRGU7S0FBbkI7O3NDQUQwQjs7S0FBYTs7QUFLdkMsV0FBTyxzQkFBUSxXQUFSLENBQVAsQ0FMdUM7Q0FBcEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbCBmcm9tICd1dGlsJztcblxuaW1wb3J0IGlzU3RyaW5nIGZyb20gJ2xvZGFzaC9pc1N0cmluZyc7XG5cbmltcG9ydCB7IGdldERlZmF1bHQgfSBmcm9tICcuL2VzNm1vZHVsZXMnO1xuXG5cbmNvbnN0IG1vZHVsZVRlbXBsYXRlcyA9IFtcbiAgICAnJXMtd2VicGFjay1zaGltJyxcbiAgICAnJXMtd2ViLXNoaW0nLFxuICAgICclcy1zaGltJyxcbiAgICAnJXMnXG5dXG5cbmZ1bmN0aW9uIHJlc29sdmVTaGltKG5hbWUsIHRlbXBsYXRlcykge1xuICAgIGZvcihsZXQgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgIGxldCBleHBhbmRlZCA9IHV0aWwuZm9ybWF0KHRlbXBsYXRlLCBuYW1lKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlLnJlc29sdmUoZXhwYW5kZWQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHt9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgc2hpbTogJHtKU09OLnN0cmluZ2lmeShuYW1lKX1gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbShzaGltLCAuLi5zaGltT3B0aW9ucykge1xuICAgIGlmKGlzU3RyaW5nKHNoaW0pKSB7XG4gICAgICAgIHNoaW0gPSBnZXREZWZhdWx0KHJlcXVpcmUocmVzb2x2ZVNoaW0oc2hpbSwgbW9kdWxlVGVtcGxhdGVzKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBzaGltKC4uLnNoaW1PcHRpb25zKTtcbn1cbiJdfQ==