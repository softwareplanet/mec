import React, { useState } from 'react';
import ViewContext from './src/components/RenderList/Context';
import { PopUpContext } from './src/components/Pop-up/PopUpContext';
import ProgressContext from './src/components/Layout/ProgressContext';
import { VisitedPagesContext } from './src/components/Layout/VisitedPagesContext';

let Root = ({ children }) => {
    let [view, setView] = useState('grid');
    let [progressState, setProgressState] = useState(false);
    let [showProgress, setShowProgress] = useState(true);
    const [popupState, setPopupState] = useState(false);
    const [visitedPages, setVisitedPages] = useState(false);

    return (
        <ProgressContext.Provider
            value={{
                progressState,
                setProgressState,
                showProgress,
                setShowProgress,
            }}
        >
            <VisitedPagesContext.Provider
                value={{ visitedPages, setVisitedPages }}
            >
                <ViewContext.Provider value={{ view, setView }}>
                    <PopUpContext.Provider
                        value={{ popupState, setPopupState }}
                    >
                        {children}
                    </PopUpContext.Provider>
                </ViewContext.Provider>
            </VisitedPagesContext.Provider>
        </ProgressContext.Provider>
    );
};

export const wrapRootElement = ({ element }) => {
    return <Root>{element}</Root>;
};
