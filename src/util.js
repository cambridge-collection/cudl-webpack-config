import identity from 'lodash/utility/identity';
import isArray from 'lodash/lang/isArray';

import WebpackConfig from 'webpack-config';

/**
 * Return a function which creates a WebpackConfig with the specified array of
 * loaders when called.
 *
 * If a customiser function is provided, it's invoked when returned function is
 * invoked, with the defautLoaders array as the first argument followed by any
 * args the returned function is invoked with. It should return an array of
 * loaders which will be used in the resulting WebpackConfig.
 */
export function loaders(defaultLoaders, customiser = identity) {
    return (...args) => {
        if(!isArray(defaultLoaders))
            throw new Error(
                `first argument must be an array, got: ${defaultLoaders}`);

        let loaders = customiser(defaultLoaders, ...args);

        return new WebpackConfig().merge({
            module: {
                loaders: loaders
            }
        });
    }
}

/**
 * As loaders(), except the function itself and the customiser take a single
 * loader, not an array of loaders.
 */
export function loader(defaultLoader, customiser = identity) {
    return loaders([defaultLoader], ([defaultLoader], ...args) => {
        return [customiser(defaultLoader, ...args)];
    })
}

/**
 * Lookup a value from WebpackConfig.environment.
 */
export function env(key) {
    return WebpackConfig.environment.value(key);
}
