/** Get the default value from either a commonjs module or es6 module. */
export function getDefault(module) {
    return (module && module.__esModule) ? module.default : module;
}
