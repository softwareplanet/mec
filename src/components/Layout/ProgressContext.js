import React from 'react';

const ProgressContext = React.createContext({
    progressState: false,
    setProgressState: () => {},
});

export default  ProgressContext ;
