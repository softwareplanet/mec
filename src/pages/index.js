import '../components/reset.css';
import React from 'react';
import RenderList from '../components/RenderList/RenderList';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import LandingPage from '../components/Landing/LandingPage';

export const query = graphql`
    query {
        allCategoriesYaml {
            nodes {
                name
                title
                image {
                    childImageSharp {
                        gatsbyImageData(width: 240, height: 240)
                    }
                }
            }
        }
    }
`;

let FirstPage = ({ data }) => {
    return <LandingPage />;
};

export default FirstPage;
