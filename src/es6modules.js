import DefaultConfigFactory from 'webpack-config/lib/defaultConfigFactory';


/** Get the default value from either a commonjs module or es6 module. */
export function getDefault(module) {
    return (module && module.__esModule) ? module.default : module;
}

/**
 * A webpack-config ConfigFactory which knows how to create configs from es6
 * modules. Modules are expected to export their config as their default
 * export.
 */
export class Es6ConfigFactory extends DefaultConfigFactory {
    createConfig(obj) {
        return super.createConfig(getDefault(obj));
    }
}
