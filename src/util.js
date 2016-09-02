import identity from 'lodash/identity';
import isArray from 'lodash/isArray';

import { Config, environment } from 'webpack-config';

/**
 * Return a function which creates a Config with the specified array of
 * loaders when called.
 *
 * If a customiser function is provided, it's invoked when returned function is
 * invoked, with the defautLoaders array as the first argument followed by any
 * args the returned function is invoked with. It should return an array of
 * loaders which will be used in the resulting Config.
 */
export function loaders(defaultLoaders, customiser = identity) {
    return (...args) => {
        if(!isArray(defaultLoaders))
            throw new Error(
                `first argument must be an array, got: ${defaultLoaders}`);

        let loaders = customiser(defaultLoaders, ...args);

        return new Config().merge({
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
 * If value is a function, return the result of executing it, otherwise return
 * the value as is.
 */
function resolve(value) {
    if(typeof value === 'function') {
        return value.call();
    }
    return value;
}

/**
 * Lookup a value from the default webpack-config environment.
 */
export function env(key, env=environment) {
    return resolve(env.get(key));
}
