import { loader } from '../util';


export default loader(
    {
        test: require.resolve('jquery.easing'),
        loader: 'imports-loader?jQuery=jquery'
    }
);
