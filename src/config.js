import WebpackConfig from 'webpack-config';
import DefaultConfigLoader from 'webpack-config/lib/defaultConfigLoader';
import DefaultConfigPathResolver from 'webpack-config/lib/defaultConfigLoader';

import { Es6ConfigFactory } from './es6modules';


/** A webpack-config Config class which can extend() from es6 modules. */
export class Config extends WebpackConfig { }

// Use our ConfigFactory which knows about es6 modules
Config.factory = new Es6ConfigFactory();

// Use the default config loader with our es6 module factory
Config.loader = new DefaultConfigLoader(
        Config.factory, DefaultConfigPathResolver.INSTANCE);
