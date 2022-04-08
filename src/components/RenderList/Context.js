import React from 'react';

const ViewContext = React.createContext({
    view: 'grid',
    setView: () => {}
});

export default ViewContext;
