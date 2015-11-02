import { loader } from '../util';


export default loader(
    {
        test: /\/\w+\.js$/,
        include: /\/node_modules\/bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
    }
);
