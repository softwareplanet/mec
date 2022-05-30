import React from 'react';

const ProgressContext = React.createContext({
    loadingProgress: 0,
    setLoadingProgress: () => {},
    progressState: false,
    setProgressState: () => {},
    showProgress: true, 
    setShowProgress: () => {}
});

export default  ProgressContext ;
