'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.shim = shim;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _lodashLangIsString = require('lodash/lang/isString');

var _lodashLangIsString2 = _interopRequireDefault(_lodashLangIsString);

var moduleTemplates = ['%s-webpack-shim', '%s-web-shim', '%s-shim', '%s'];

function resolveShim(name, templates) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = templates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var template = _step.value;

            var expanded = _util2['default'].format(template, name);
            try {
                return require.resolve(expanded);
            } catch (e) {}
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
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
    if ((0, _lodashLangIsString2['default'])(shim)) {
        shim = require(resolveShim(shim, moduleTemplates));
    }

    return shim(shimOptions);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7b0JBQWlCLE1BQU07Ozs7a0NBRUYsc0JBQXNCOzs7O0FBRzNDLElBQU0sZUFBZSxHQUFHLENBQ3BCLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsU0FBUyxFQUNULElBQUksQ0FDUCxDQUFBOztBQUVELFNBQVMsV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7Ozs7OztBQUNsQyw2QkFBb0IsU0FBUyw4SEFBRTtnQkFBdkIsUUFBUTs7QUFDWixnQkFBSSxRQUFRLEdBQUcsa0JBQUssTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzQyxnQkFBSTtBQUNBLHVCQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEMsQ0FDRCxPQUFNLENBQUMsRUFBRSxFQUFFO1NBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxVQUFNLElBQUksS0FBSyx3QkFBc0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBRyxDQUFBO0NBQy9EOztBQUVNLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUU7QUFDcEMsUUFBRyxxQ0FBUyxJQUFJLENBQUMsRUFBRTtBQUNmLFlBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO0tBQ3REOztBQUVELFdBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0NBQzVCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5cbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvbGFuZy9pc1N0cmluZyc7XG5cblxuY29uc3QgbW9kdWxlVGVtcGxhdGVzID0gW1xuICAgICclcy13ZWJwYWNrLXNoaW0nLFxuICAgICclcy13ZWItc2hpbScsXG4gICAgJyVzLXNoaW0nLFxuICAgICclcydcbl1cblxuZnVuY3Rpb24gcmVzb2x2ZVNoaW0obmFtZSwgdGVtcGxhdGVzKSB7XG4gICAgZm9yKGxldCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXMpIHtcbiAgICAgICAgbGV0IGV4cGFuZGVkID0gdXRpbC5mb3JtYXQodGVtcGxhdGUsIG5hbWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmUucmVzb2x2ZShleHBhbmRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge31cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBzaGltOiAke0pTT04uc3RyaW5naWZ5KG5hbWUpfWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltKHNoaW0sIHNoaW1PcHRpb25zKSB7XG4gICAgaWYoaXNTdHJpbmcoc2hpbSkpIHtcbiAgICAgICAgc2hpbSA9IHJlcXVpcmUocmVzb2x2ZVNoaW0oc2hpbSwgbW9kdWxlVGVtcGxhdGVzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoaW0oc2hpbU9wdGlvbnMpO1xufVxuIl19