import React, { useState } from 'react';

export const Wrapper = ({ children }) => {
    let [view, setView] = useState('grid');

    return <div>{children}</div>;
};
