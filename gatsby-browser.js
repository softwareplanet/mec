import React, { useState } from 'react';
import ViewContext from './src/components/RenderList/Context';
import { PopUpContext }  from './src/components/Pop-up/PopUpContext';
import ProgressContext from './src/components/Layout/ProgressContext';

let Root = ({ children }) => {
    let [view, setView] = useState('grid');
    let [loadingProgress, setLoadingProgress] = useState(0);
    let [progressState, setProgressState] = useState(false);
    let [showProgress, setShowProgress] = useState(true);
    const [popupState, setPopupState] = useState(false);
    return (
        <ProgressContext.Provider value={{ loadingProgress, setLoadingProgress, progressState, setProgressState, showProgress, setShowProgress }}>
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
