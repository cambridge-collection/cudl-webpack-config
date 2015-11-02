import util from 'util';

import isString from 'lodash/lang/isString';


const moduleTemplates = [
    '%s-webpack-shim',
    '%s-web-shim',
    '%s-shim',
    '%s'
]

function resolveShim(name, templates) {
    for(let template of templates) {
        let expanded = util.format(template, name);
        try {
            return require.resolve(expanded);
        }
        catch(e) {}
    }
    throw new Error(`Cannot find shim: ${JSON.stringify(name)}`)
}

export function shim(shim, shimOptions) {
    if(isString(shim)) {
        shim = require(resolveShim(shim, moduleTemplates));
    }

    return shim(shimOptions);
}
