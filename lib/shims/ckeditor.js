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
    loader: 'exports?window.CKEDITOR'
}, function (loader, options) {
    options = options || {};

    if (options.dir !== undefined) {
        loader.include = options.dir;
    }

    return loader;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGltcy9ja2VkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7a0JBR2Usa0JBQ1g7QUFDSSxVQUFNLGlCQUFOO0FBQ0EsYUFBUyxzQkFBVDs7OztBQUlBLFlBQVEseUJBQVI7Q0FQTyxFQVNYLFVBQUMsTUFBRCxFQUFTLE9BQVQsRUFBcUI7QUFDakIsY0FBVSxXQUFXLEVBQVgsQ0FETzs7QUFHakIsUUFBRyxRQUFRLEdBQVIsS0FBZ0IsU0FBaEIsRUFBMkI7QUFDMUIsZUFBTyxPQUFQLEdBQWlCLFFBQVEsR0FBUixDQURTO0tBQTlCOztBQUlBLFdBQU8sTUFBUCxDQVBpQjtDQUFyQiIsImZpbGUiOiJja2VkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRlciB9IGZyb20gJy4uL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRlcihcbiAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC9ja2VkaXRvclxcLmpzJC8sXG4gICAgICAgIGluY2x1ZGU6IC9cXC92ZW5kb3JcXC9ja2VkaXRvclxcLy8sXG4gICAgICAgIC8vIEl0IHdvdWxkIGJlIHRyaWNreSB0byBzaGltIGNrZWRpdG9yIGluIHN1Y2ggYSB3YXkgdGhhdFxuICAgICAgICAvLyBpdCB3b3VsZG4ndCBjcmVhdGUgYSBnbG9iYWwgb24gd2luZG93IGFzIGl0IHJlbGllcyBvblxuICAgICAgICAvLyB2YXJpb3VzIHByb3BlcnRpZXMgb2Ygd2luZG93LlxuICAgICAgICBsb2FkZXI6ICdleHBvcnRzP3dpbmRvdy5DS0VESVRPUidcbiAgICB9LFxuICAgIChsb2FkZXIsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgaWYob3B0aW9ucy5kaXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbG9hZGVyLmluY2x1ZGUgPSBvcHRpb25zLmRpcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsb2FkZXI7XG4gICAgfVxuKTtcbiJdfQ==