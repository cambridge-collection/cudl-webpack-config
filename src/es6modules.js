import DefaultConfigFactory from 'webpack-config/lib/defaultConfigFactory';


/**
 * A webpack-config ConfigFactory which knows how to create configs from es6
 * modules. Modules are expected to export their config as their default
 * export.
 */
export class Es6ConfigFactory extends DefaultConfigFactory {
    createConfig(obj) {
        if(obj.__esModule) {
            return super.createConfig(obj.default);
        }

        return super.createConfig(obj);
    }
}
