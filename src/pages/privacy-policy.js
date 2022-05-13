import '../components/reset.css';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import PrivacyPolicy  from '../components/Privacy-Policy/Privacy-Policy.js';

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

const PrivacyPolicyPage = ({ data }) => {
    return (
        <Layout name={data.mdx.frontmatter.title} backPath={`/`}>
            <PrivacyPolicy data={data}/>
        </Layout>
    );
};
export default PrivacyPolicyPage;
