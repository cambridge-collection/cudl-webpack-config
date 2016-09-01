import WebpackConfig from 'webpack-config';

import { loaders } from '../util';

export function shim_2_1_0() {
    // OpenSeadragon still has non-standard packaging which requires lots of
    // hacking. They're about to do a release on NPM which should be more
    // regular...
    let dirPattern = /\/node_modules\/OpenSeadragon\/src\//;

    return new WebpackConfig().merge({
        module: {
            loaders: [
                {
                    include: dirPattern,
                    test: /\/.*\.js$/,
                    exclude: /\/openseadragon\.js/,
                    loader: 'imports?OpenSeadragon=./openseadragon.js'
                },
                {
                    include: dirPattern,
                    test: /\/openseadragon\.js$/,
                    loaders: [
                        'imports?window=>global',
                        'exports?OpenSeadragon',
                        'wrap?shim-openseadragon-2.1.0'
                    ]
                }
            ]
        },
        wrap: {
            'shim-openseadragon-2.1.0': {
                before: `\
// Redirect assignment of OpenSeadragon global to local var. This is required
// as otherwise we can't assign the OpenSeadragon local before it's passed to
// the main module wrapping function.
var OpenSeadragon;
Object.defineProperty(window, 'OpenSeadragon', {
    get: function() { return OpenSeadragon; },
    set: function(value) { OpenSeadragon = value; },
    configurable: true,
    enumerable: true
});
`,
                after: `\
// Clean up our intercepting property
delete window.OpenSeadragon;
`
            }
        }
    });
}

export default function(version) {
    if(version ==='2.1.0') {
        return shim_2_1_0();
    }

    return new WebpackConfig().merge({
        resolve: {
            alias: {
                // Enough openseadragons?
                openseadragon: 'openseadragon/built-openseadragon/' +
                                'openseadragon/openseadragon.js'
            }
        },
        module: {
            loaders: [
                {
                    test: /\/openseadragon\.js$/,
                    include: /\/bower_components\/openseadragon\//,
                    loader: 'exports?OpenSeadragon'
                }
            ]
        }
    });
}

