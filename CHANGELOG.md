# cudl-webpack-config Changelog

## 2.0.0

* Support webpack-config 6.
    * Our own support for es6 modules is removed as 6 supports this itself now
* Updated OpenSeadragon shim to support ^2.2

### 1.3.1

* Fixed OpenSeadragon shim not cleaning up `OpenSeadragon` global

### 1.3.0

* Allow variable arguments to `shim()`
* Added shim for OpenSeadragon 2.1.0

## 1.2.0

* Support es6 modules in `shim()` and `Config.extend()`

## 1.1.2

* Updated webpack-config from 1 to 4.

## 1.1.1

* Added `util.loaders()`

## 1.1.0

* Added shim for `jquery.easing`.

## 1.0.0

Initial version
