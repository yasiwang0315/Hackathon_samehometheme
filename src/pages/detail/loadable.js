import React from "react";
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./'), //异步加载的新语法
    loading() {
        return <div>Loading</div>
    },
});

export default () => <LoadableComponent/>
