import { rule } from '../util';


export default rule(
    {
        test: require.resolve('jquery.easing'),
        loader: 'imports-loader?jQuery=jquery'
    }
);
