import React, { useState } from 'react';
import ViewContext from './src/components/RenderList/Context';

let Root = ({ children }) => {
    let [view, setView] = useState('grid');

    return (
        <ViewContext.Provider value={{ view, setView }}>
            {children}
        </ViewContext.Provider>
    );
};

export const wrapRootElement = ({ element }) => {
    return <Root>{element}</Root>;
};
