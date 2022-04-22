import React, { useState } from 'react';
import ViewContext from './src/components/RenderList/Context';
import { PopUpContext } from './src/components/Pop-up/PopUpContext';

let Root = ({ children }) => {
    let [view, setView] = useState('grid');
    const [popupState, setPopupState] = useState(false);

    return (
        <ViewContext.Provider value={{ view, setView }}>
            <PopUpContext.Provider value={{ popupState, setPopupState }}>
                {children}
            </PopUpContext.Provider>
        </ViewContext.Provider>
    );
};

export const wrapRootElement = ({ element }) => {
    return <Root>{element}</Root>;
};
