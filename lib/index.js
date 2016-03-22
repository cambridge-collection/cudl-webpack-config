'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.shim = shim;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _lodashIsString = require('lodash/isString');

var _lodashIsString2 = _interopRequireDefault(_lodashIsString);

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
    if ((0, _lodashIsString2['default'])(shim)) {
        shim = require(resolveShim(shim, moduleTemplates));
    }

    return shim(shimOptions);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBRUYsaUJBQWlCOzs7O0FBR3RDLElBQU0sZUFBZSxHQUFHLENBQ3BCLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsU0FBUyxFQUNULElBQUksQ0FDUCxDQUFBOztBQUVELFNBQVMsV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7Ozs7OztBQUNsQyw2QkFBb0IsU0FBUyw4SEFBRTtnQkFBdkIsUUFBUTs7QUFDWixnQkFBSSxRQUFRLEdBQUcsa0JBQUssTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzQyxnQkFBSTtBQUNBLHVCQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEMsQ0FDRCxPQUFNLENBQUMsRUFBRSxFQUFFO1NBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxVQUFNLElBQUksS0FBSyx3QkFBc0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBRyxDQUFBO0NBQy9EOztBQUVNLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUU7QUFDcEMsUUFBRyxpQ0FBUyxJQUFJLENBQUMsRUFBRTtBQUNmLFlBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO0tBQ3REOztBQUVELFdBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0NBQzVCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5cbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuXG5cbmNvbnN0IG1vZHVsZVRlbXBsYXRlcyA9IFtcbiAgICAnJXMtd2VicGFjay1zaGltJyxcbiAgICAnJXMtd2ViLXNoaW0nLFxuICAgICclcy1zaGltJyxcbiAgICAnJXMnXG5dXG5cbmZ1bmN0aW9uIHJlc29sdmVTaGltKG5hbWUsIHRlbXBsYXRlcykge1xuICAgIGZvcihsZXQgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgIGxldCBleHBhbmRlZCA9IHV0aWwuZm9ybWF0KHRlbXBsYXRlLCBuYW1lKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlLnJlc29sdmUoZXhwYW5kZWQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHt9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgc2hpbTogJHtKU09OLnN0cmluZ2lmeShuYW1lKX1gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbShzaGltLCBzaGltT3B0aW9ucykge1xuICAgIGlmKGlzU3RyaW5nKHNoaW0pKSB7XG4gICAgICAgIHNoaW0gPSByZXF1aXJlKHJlc29sdmVTaGltKHNoaW0sIG1vZHVsZVRlbXBsYXRlcykpO1xuICAgIH1cblxuICAgIHJldHVybiBzaGltKHNoaW1PcHRpb25zKTtcbn1cbiJdfQ==