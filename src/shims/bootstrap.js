import { rule } from '../util';


export default rule(
    {
        test: /\/\w+\.js$/,
        include: /\/node_modules\/bootstrap\/js\//,
        loader: 'imports-loader?jQuery=jquery'
    }
);
