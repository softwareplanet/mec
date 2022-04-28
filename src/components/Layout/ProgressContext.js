import React from 'react';

const ProgressContext = React.createContext({
    progressState: false,
    setProgressState: () => {},
    showProgress: true, 
    setShowProgress: () => {}
});

export default  ProgressContext ;
