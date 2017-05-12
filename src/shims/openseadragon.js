import { Config } from 'webpack-config';
import { satisfies } from 'semver';

import { loaders } from '../util';

const OSD_2_SHIM = {
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
};


function shim_2_2() {
    return new Config().merge({
        module: {
            loaders: [
                {
                    include: require.resolve('openseadragon'),
                    loaders: [
                        // Disable AMD define used by OSD
                        'imports-loader?window=>global&define=>false',
                        'exports-loader?OpenSeadragon',
                        'wrap-loader?shim-openseadragon-2.x'
                    ]
                }
            ]
        },
        wrap: {
            'shim-openseadragon-2.x': OSD_2_SHIM
        }
    });
}

function shim_2_1() {
    // OpenSeadragon < 2.2 had non-standard packaging which required lots of
    // hacking. ^2.2 has an NPM release, but contains only a concatenated file
    // as they don't use js modules internally yet.
    let dirPattern = /\/node_modules\/OpenSeadragon\/src\//;

    return new Config().merge({
        module: {
            loaders: [
                {
                    include: dirPattern,
                    test: /\/.*\.js$/,
                    exclude: /\/openseadragon\.js/,
                    loader: 'imports-loader?OpenSeadragon=./openseadragon.js'
                },
                {
                    include: dirPattern,
                    test: /\/openseadragon\.js$/,
                    loaders: [
                        'imports-loader?window=>global',
                        'exports-loader?OpenSeadragon',
                        'wrap-loader?shim-openseadragon-2.x'
                    ]
                }
            ]
        },
        wrap: {
            'shim-openseadragon-2.x': OSD_2_SHIM
        }
    });
}

export default function(version) {
    if(satisfies(version, '^2.2')) {
        return shim_2_2();
    }
    else if(satisfies(version, '^2')) {
        return shim_2_1();
    }

    return new Config().merge({
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
                    loader: 'exports-loader?OpenSeadragon'
                }
            ]
        }
    });
}

