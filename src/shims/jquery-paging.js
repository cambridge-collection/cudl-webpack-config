import { loader } from '../util';


export default loader(
    {
        test: /\/jquery\.paging\.js$/,
        include: /\/bower_components\/paging\//,
        loader: 'imports?jQuery=jquery,this=>global'
    }
);
