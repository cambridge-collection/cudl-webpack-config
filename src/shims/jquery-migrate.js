import { rule } from '../util';


export default rule(
    {
        test: require.resolve('jquery-migrate'),
        loader: 'imports-loader?jQuery=jquery,window=>global'
    }
);
