import '../components/reset.css';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as styles from '../components/PrivacyPolicy.module.css';

export const query = graphql`
query {
    mdx(slug: { eq: "privacy-policy" }) {
        frontmatter {
            title
        }
        body
    }
}
`;

const PrivacyPolicy = ({ data }) => {
    return (
        <Layout name={data.mdx.frontmatter.title} backPath={`/`}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    );
};
export default PrivacyPolicy;
