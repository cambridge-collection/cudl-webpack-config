import { loader } from '../util';


export default loader(
    {
        test: /\/jquery.fancybox.js$/,
        include: /\/bower_components\/fancybox\/source\//,
        loader: 'imports-loader?' +
            'window=>global,document=>window.document,jQuery=jquery'
    }
);
