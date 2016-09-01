'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Es6ConfigFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.getDefault = getDefault;

var _defaultConfigFactory = require('webpack-config/lib/defaultConfigFactory');

var _defaultConfigFactory2 = _interopRequireDefault(_defaultConfigFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Get the default value from either a commonjs module or es6 module. */
function getDefault(module) {
    return module && module.__esModule ? module.default : module;
}

/**
 * A webpack-config ConfigFactory which knows how to create configs from es6
 * modules. Modules are expected to export their config as their default
 * export.
 */

var Es6ConfigFactory = exports.Es6ConfigFactory = function (_DefaultConfigFactory) {
    _inherits(Es6ConfigFactory, _DefaultConfigFactory);

    function Es6ConfigFactory() {
        _classCallCheck(this, Es6ConfigFactory);

        return _possibleConstructorReturn(this, (Es6ConfigFactory.__proto__ || Object.getPrototypeOf(Es6ConfigFactory)).apply(this, arguments));
    }

    _createClass(Es6ConfigFactory, [{
        key: 'createConfig',
        value: function createConfig(obj) {
            return _get(Es6ConfigFactory.prototype.__proto__ || Object.getPrototypeOf(Es6ConfigFactory.prototype), 'createConfig', this).call(this, getDefault(obj));
        }
    }]);

    return Es6ConfigFactory;
}(_defaultConfigFactory2.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lczZtb2R1bGVzLmpzIl0sIm5hbWVzIjpbImdldERlZmF1bHQiLCJtb2R1bGUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIkVzNkNvbmZpZ0ZhY3RvcnkiLCJvYmoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBSWdCQSxVLEdBQUFBLFU7O0FBSmhCOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNPLFNBQVNBLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCO0FBQy9CLFdBQVFBLFVBQVVBLE9BQU9DLFVBQWxCLEdBQWdDRCxPQUFPRSxPQUF2QyxHQUFpREYsTUFBeEQ7QUFDSDs7QUFFRDs7Ozs7O0lBS2FHLGdCLFdBQUFBLGdCOzs7Ozs7Ozs7OztxQ0FDSUMsRyxFQUFLO0FBQ2Qsb0pBQTBCTCxXQUFXSyxHQUFYLENBQTFCO0FBQ0giLCJmaWxlIjoiZXM2bW9kdWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZWZhdWx0Q29uZmlnRmFjdG9yeSBmcm9tICd3ZWJwYWNrLWNvbmZpZy9saWIvZGVmYXVsdENvbmZpZ0ZhY3RvcnknO1xuXG5cbi8qKiBHZXQgdGhlIGRlZmF1bHQgdmFsdWUgZnJvbSBlaXRoZXIgYSBjb21tb25qcyBtb2R1bGUgb3IgZXM2IG1vZHVsZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0KG1vZHVsZSkge1xuICAgIHJldHVybiAobW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlKSA/IG1vZHVsZS5kZWZhdWx0IDogbW9kdWxlO1xufVxuXG4vKipcbiAqIEEgd2VicGFjay1jb25maWcgQ29uZmlnRmFjdG9yeSB3aGljaCBrbm93cyBob3cgdG8gY3JlYXRlIGNvbmZpZ3MgZnJvbSBlczZcbiAqIG1vZHVsZXMuIE1vZHVsZXMgYXJlIGV4cGVjdGVkIHRvIGV4cG9ydCB0aGVpciBjb25maWcgYXMgdGhlaXIgZGVmYXVsdFxuICogZXhwb3J0LlxuICovXG5leHBvcnQgY2xhc3MgRXM2Q29uZmlnRmFjdG9yeSBleHRlbmRzIERlZmF1bHRDb25maWdGYWN0b3J5IHtcbiAgICBjcmVhdGVDb25maWcob2JqKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5jcmVhdGVDb25maWcoZ2V0RGVmYXVsdChvYmopKTtcbiAgICB9XG59XG4iXX0=