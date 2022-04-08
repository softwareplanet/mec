import React, { useState } from 'react';
import ViewContext from './src/components/RenderList/Context';
import ProgressContext from './src/components/Layout/ProgressContext';

let Root = ({ children }) => {
    let [view, setView] = useState('grid');
    let [progressState, setProgressState] = useState(false);

    return (
        <ViewContext.Provider value={{ view, setView }}>
            <ProgressContext.Provider
                value={{ progressState, setProgressState }}
            >
                {children}
            </ProgressContext.Provider>
        </ViewContext.Provider>
    );
};

export const wrapRootElement = ({ element }) => {
    return <Root>{element}</Root>;
};
