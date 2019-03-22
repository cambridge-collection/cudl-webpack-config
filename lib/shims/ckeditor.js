"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("../util");

var _default = (0, _util.rule)({
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

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9ja2VkaXRvci5qcyJdLCJuYW1lcyI6WyJ0ZXN0IiwiaW5jbHVkZSIsImxvYWRlciIsIm9wdGlvbnMiLCJkaXIiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7ZUFHZSxnQkFDWDtBQUNJQSxFQUFBQSxJQUFJLEVBQUUsaUJBRFY7QUFFSUMsRUFBQUEsT0FBTyxFQUFFLHNCQUZiO0FBR0k7QUFDQTtBQUNBO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRTtBQU5aLENBRFcsRUFTWCxVQUFDQSxNQUFELEVBQVNDLE9BQVQsRUFBcUI7QUFDakJBLEVBQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJLEVBQXJCOztBQUVBLE1BQUdBLE9BQU8sQ0FBQ0MsR0FBUixLQUFnQkMsU0FBbkIsRUFBOEI7QUFDMUJILElBQUFBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQkUsT0FBTyxDQUFDQyxHQUF6QjtBQUNIOztBQUVELFNBQU9GLE1BQVA7QUFDSCxDQWpCVSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcnVsZSB9IGZyb20gJy4uL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJ1bGUoXG4gICAge1xuICAgICAgICB0ZXN0OiAvXFwvY2tlZGl0b3JcXC5qcyQvLFxuICAgICAgICBpbmNsdWRlOiAvXFwvdmVuZG9yXFwvY2tlZGl0b3JcXC8vLFxuICAgICAgICAvLyBJdCB3b3VsZCBiZSB0cmlja3kgdG8gc2hpbSBja2VkaXRvciBpbiBzdWNoIGEgd2F5IHRoYXRcbiAgICAgICAgLy8gaXQgd291bGRuJ3QgY3JlYXRlIGEgZ2xvYmFsIG9uIHdpbmRvdyBhcyBpdCByZWxpZXMgb25cbiAgICAgICAgLy8gdmFyaW91cyBwcm9wZXJ0aWVzIG9mIHdpbmRvdy5cbiAgICAgICAgbG9hZGVyOiAnZXhwb3J0cy1sb2FkZXI/d2luZG93LkNLRURJVE9SJ1xuICAgIH0sXG4gICAgKGxvYWRlciwgb3B0aW9ucykgPT4ge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZihvcHRpb25zLmRpciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsb2FkZXIuaW5jbHVkZSA9IG9wdGlvbnMuZGlyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvYWRlcjtcbiAgICB9XG4pO1xuIl19