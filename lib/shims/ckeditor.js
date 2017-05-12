'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = require('../util');

exports.default = (0, _util.loader)({
    test: /\/ckeditor\.js$/,
    include: /\/vendor\/ckeditor\//,
    // It would be tricky to shim ckeditor in such a way that
    // it wouldn't create a global on window as it relies on
    // various properties of window.
    loader: 'exports-loader?window.CKEDITOR'
}, function (loader, options) {
    options = options || {};

    if (options.dir !== undefined) {
        loader.include = options.dir;
    }

    return loader;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9ja2VkaXRvci5qcyJdLCJuYW1lcyI6WyJ0ZXN0IiwiaW5jbHVkZSIsImxvYWRlciIsIm9wdGlvbnMiLCJkaXIiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztrQkFHZSxrQkFDWDtBQUNJQSxVQUFNLGlCQURWO0FBRUlDLGFBQVMsc0JBRmI7QUFHSTtBQUNBO0FBQ0E7QUFDQUMsWUFBUTtBQU5aLENBRFcsRUFTWCxVQUFDQSxNQUFELEVBQVNDLE9BQVQsRUFBcUI7QUFDakJBLGNBQVVBLFdBQVcsRUFBckI7O0FBRUEsUUFBR0EsUUFBUUMsR0FBUixLQUFnQkMsU0FBbkIsRUFBOEI7QUFDMUJILGVBQU9ELE9BQVAsR0FBaUJFLFFBQVFDLEdBQXpCO0FBQ0g7O0FBRUQsV0FBT0YsTUFBUDtBQUNILENBakJVLEMiLCJmaWxlIjoiY2tlZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkZXIgfSBmcm9tICcuLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBsb2FkZXIoXG4gICAge1xuICAgICAgICB0ZXN0OiAvXFwvY2tlZGl0b3JcXC5qcyQvLFxuICAgICAgICBpbmNsdWRlOiAvXFwvdmVuZG9yXFwvY2tlZGl0b3JcXC8vLFxuICAgICAgICAvLyBJdCB3b3VsZCBiZSB0cmlja3kgdG8gc2hpbSBja2VkaXRvciBpbiBzdWNoIGEgd2F5IHRoYXRcbiAgICAgICAgLy8gaXQgd291bGRuJ3QgY3JlYXRlIGEgZ2xvYmFsIG9uIHdpbmRvdyBhcyBpdCByZWxpZXMgb25cbiAgICAgICAgLy8gdmFyaW91cyBwcm9wZXJ0aWVzIG9mIHdpbmRvdy5cbiAgICAgICAgbG9hZGVyOiAnZXhwb3J0cy1sb2FkZXI/d2luZG93LkNLRURJVE9SJ1xuICAgIH0sXG4gICAgKGxvYWRlciwgb3B0aW9ucykgPT4ge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZihvcHRpb25zLmRpciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsb2FkZXIuaW5jbHVkZSA9IG9wdGlvbnMuZGlyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvYWRlcjtcbiAgICB9XG4pO1xuIl19