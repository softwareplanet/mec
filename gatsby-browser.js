import React from 'react';
import Layout from './src/components/Layout/Layout';

export const wrapRootElement = ({ element }) => {
    return <Layout>{element}</Layout>;
};
