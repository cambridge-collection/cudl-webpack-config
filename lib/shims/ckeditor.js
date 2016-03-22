'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _util = require('../util');

exports['default'] = (0, _util.loader)({
    test: /\/ckeditor\.js$/,
    include: /\/vendor\/ckeditor\//,
    // It would be tricky to shim ckeditor in such a way that
    // it wouldn't create a global on window as it relies on
    // various properties of window.
    loader: 'exports?window.CKEDITOR'
}, function (loader, options) {
    options = options || {};

    if (options.dir !== undefined) {
        loader.include = options.dir;
    }

    return loader;
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9ja2VkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBQXVCLFNBQVM7O3FCQUdqQixrQkFDWDtBQUNJLFFBQUksRUFBRSxpQkFBaUI7QUFDdkIsV0FBTyxFQUFFLHNCQUFzQjs7OztBQUkvQixVQUFNLEVBQUUseUJBQXlCO0NBQ3BDLEVBQ0QsVUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFLO0FBQ2pCLFdBQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDOztBQUV4QixRQUFHLE9BQU8sQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO0FBQzFCLGNBQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztLQUNoQzs7QUFFRCxXQUFPLE1BQU0sQ0FBQztDQUNqQixDQUNKIiwiZmlsZSI6ImNrZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZGVyIH0gZnJvbSAnLi4vdXRpbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGVyKFxuICAgIHtcbiAgICAgICAgdGVzdDogL1xcL2NrZWRpdG9yXFwuanMkLyxcbiAgICAgICAgaW5jbHVkZTogL1xcL3ZlbmRvclxcL2NrZWRpdG9yXFwvLyxcbiAgICAgICAgLy8gSXQgd291bGQgYmUgdHJpY2t5IHRvIHNoaW0gY2tlZGl0b3IgaW4gc3VjaCBhIHdheSB0aGF0XG4gICAgICAgIC8vIGl0IHdvdWxkbid0IGNyZWF0ZSBhIGdsb2JhbCBvbiB3aW5kb3cgYXMgaXQgcmVsaWVzIG9uXG4gICAgICAgIC8vIHZhcmlvdXMgcHJvcGVydGllcyBvZiB3aW5kb3cuXG4gICAgICAgIGxvYWRlcjogJ2V4cG9ydHM/d2luZG93LkNLRURJVE9SJ1xuICAgIH0sXG4gICAgKGxvYWRlciwgb3B0aW9ucykgPT4ge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZihvcHRpb25zLmRpciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsb2FkZXIuaW5jbHVkZSA9IG9wdGlvbnMuZGlyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvYWRlcjtcbiAgICB9XG4pO1xuIl19