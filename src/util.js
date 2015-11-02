import identity from 'lodash/utility/identity';
import toArray from 'lodash/lang/toArray';

import WebpackConfig from 'webpack-config';


export function loader(defaultLoader, customiser) {
    return function() {

        let loader = (customiser || identity).apply(
            undefined, [defaultLoader].concat(toArray(arguments)));

        return new WebpackConfig().merge({
            module: {
                loaders: [
                    loader
                ]
            }
        });
    }
};


/**
 * Lookup a value from WebpackConfig.environment.
 */
export function env(key) {
    return WebpackConfig.environment.value(key);
}