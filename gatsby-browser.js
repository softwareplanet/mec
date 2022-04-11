import React, { useState } from 'react';
import ViewContext from './src/components/RenderList/Context';
import { PopUpContext }  from './src/components/Pop-up/PopUpContext';
import Layout from './src/components/Layout/Layout.js';
import ProgressContext from './src/components/Layout/ProgressContext';

let Root = ({ children }) => {
    let [view, setView] = useState('grid');
    let [progressState, setProgressState] = useState(false);
    const [popupState, setPopupState] = useState(false);
    return (
        <ProgressContext.Provider value={{ progressState, setProgressState }}>
            <ViewContext.Provider value={{ view, setView }}>
                <PopUpContext.Provider value={{ popupState, setPopupState }}>
                    {children}
                </PopUpContext.Provider>
            </ViewContext.Provider>
        </ProgressContext.Provider>
    );
};

export const wrapRootElement = ({ element }) => {
    return <Root>{element}</Root>;
};
