import React from 'react';
import { Wrapper } from './src/components/Wrapper/Wrapper';

export const wrapRootElement = ({ element }) => {
    return <Wrapper>{element}</Wrapper>;
};
