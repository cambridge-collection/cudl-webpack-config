import WebpackConfig from 'webpack-config';

import { loader } from '../util';


export default function() {
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
