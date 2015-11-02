import { loader } from '../util';


export default loader(
    {
        test: /\/ckeditor\.js$/,
        include: /\/vendor\/ckeditor\//,
        // It would be tricky to shim ckeditor in such a way that
        // it wouldn't create a global on window as it relies on
        // various properties of window.
        loader: 'exports?window.CKEDITOR'
    },
    (loader, options) => {
        options = options || {};

        if(options.dir !== undefined) {
            loader.include = options.dir;
        }

        return loader;
    }
);
