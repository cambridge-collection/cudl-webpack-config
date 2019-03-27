import { rule } from '../util';


export default rule(
    {
        test: /\/ckeditor\.js$/,
        include: /\/vendor\/ckeditor\//,
        // It would be tricky to shim ckeditor in such a way that
        // it wouldn't create a global on window as it relies on
        // various properties of window.
        loader: 'exports-loader?window.CKEDITOR'
    },
    (loader, options) => {
        options = options || {};

        if(options.dir !== undefined) {
            loader.include = options.dir;
        }

        return loader;
    }
);
