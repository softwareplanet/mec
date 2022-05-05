import '../reset.css';
import * as styles from "./PrivacyPolicy.module.css";
import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const PrivacyPolicy = ({ data }) => {
    return (
        <div className={styles.privacyPolicy}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
    );
};
export default PrivacyPolicy;
