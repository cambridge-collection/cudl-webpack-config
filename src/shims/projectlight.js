import path from 'path';

import { Config } from 'webpack-config';
import escapeRegex from 'escape-string-regexp';

import { rule } from '../util';


const PL_JS_DIR = 'project-light/javascripts';
const PL_LIB_DIR = path.join(PL_JS_DIR, 'libs');

function bowerTestRegex(location) {
    return new RegExp(escapeRegex(path.join('/', location)) + '$');
}

export default function() {
    let projectLight = path.join(PL_JS_DIR, 'custom.js')
    let modernizr = path.join(PL_LIB_DIR, 'modernizr.js');
    let iosFix = path.join(PL_LIB_DIR, 'ios-orientationchange-fix.js');

    return new Config().merge({
        resolve: {
            alias: {
                modernizr: modernizr,
                'ios-orientation-zoom-bug-fix': iosFix,
            }
        },
        module: {
            rules: [
                // Shim the project light JS as a commonjs module
                {
                    test: bowerTestRegex(projectLight),
                    loader:'imports-loader?'  + [
                        '__1=jquery-migrate',
                        '__2=ios-orientation-zoom-bug-fix'
                    ].join(',')
                },
                // Shim modernizr as a commonjs module
                {
                    test: bowerTestRegex(modernizr),
                    use: [
                        'imports-loader?this=>global',
                        'exports-loader?Modernizr'
                    ]
                },
                // Shim the ios rotate fix script
                {
                    test: bowerTestRegex(iosFix),
                    loader: 'imports-loader?this=>global'
                }
            ]
        }
    });
}
