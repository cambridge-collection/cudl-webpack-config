import { Config } from 'webpack-config';

import { rule } from '../util';


export default function() {
    return new Config().merge({
        resolve: {
            alias: {
                // Alias the main file as "paging" is unclear and typing
                // import 'paging/jquery.paging' in code is annoying.
                'jquery-paging': 'paging/jquery.paging',
            }
        },
        module: {
            rules: [
                {
                    test: /\/jquery\.paging\.js$/,
                    include: /\/bower_components\/paging\//,
                    loader: 'imports-loader?jQuery=jquery,this=>global'
                }
            ]
        }
    });
}
