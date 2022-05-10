import React from 'react';
import { Helmet } from 'react-helmet';
import DownloadPage from '../components/DownloadPage/DownloadPage';

export default function download() {
    return (
        <>
            <Helmet title="Meqd" defer={false} />
            <DownloadPage />
        </>
    );
}
