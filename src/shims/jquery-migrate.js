import { loader } from '../util';


export default loader(
    {
        test: require.resolve('jquery-migrate'),
        loader: 'imports?jQuery=jquery,window=>global'
    }
);
