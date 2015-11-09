import WebpackConfig from 'webpack-config';

import { loader } from '../util';


export default function() {
    return new WebpackConfig().merge({
        resolve: {
            alias: {
                // Alias the main file as "paging" is unclear and typing
                // import 'paging/jquery.paging' in code is annoying.
                'jquery-paging': 'paging/jquery.paging',
            }
        },
        module: {
            loaders: [
                {
                    test: /\/jquery\.paging\.js$/,
                    include: /\/bower_components\/paging\//,
                    loader: 'imports?jQuery=jquery,this=>global'
                }
            ]
        }
    });
}
