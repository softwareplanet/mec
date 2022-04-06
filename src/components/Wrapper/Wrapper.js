import React, { useState } from 'react';
import ViewContext from '../RenderList/Context';

export const Wrapper = ({ children }) => {
    let [view, setView] = useState('grid');

    return (
        <ViewContext.Provider value={{ view, setView }}>
            {children}
        </ViewContext.Provider>
    );
};
