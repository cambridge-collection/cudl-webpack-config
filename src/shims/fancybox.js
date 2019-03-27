import { rule } from '../util';


export default rule(
    {
        test: /\/jquery.fancybox.js$/,
        include: /\/bower_components\/fancybox\/source\//,
        loader: 'imports-loader?' +
            'window=>global,document=>window.document,jQuery=jquery'
    }
);
