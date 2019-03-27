import identity from 'lodash/identity';
import isArray from 'lodash/isArray';

import { Config, environment } from 'webpack-config';

/**
 * Return a function which creates a Config with the specified array of
 * rules when called.
 *
 * If a customiser function is provided, it's invoked when returned function is
 * invoked, with the defaultRules array as the first argument followed by any
 * args the returned function is invoked with. It should return an array of
 * rules which will be used in the resulting Config.
 */
export function rules(defaultRules, customiser = identity) {
    return (...args) => {
        if(!isArray(defaultRules))
            throw new Error(
                `first argument must be an array, got: ${defaultRules}`);

        let loaders = customiser(defaultRules, ...args);

        return new Config().merge({
            module: {
                rules: loaders
            }
        });
    }
}

/**
 * As rules(), except the function itself and the customiser take a single
 * rule object, not an array of rules.
 */
export function rule(defaultRule, customiser = identity) {
    return rules([defaultRule], ([defaultRule], ...args) => {
        return [customiser(defaultRule, ...args)];
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
