import * as React from "react"
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import IndexPageTemplate from "./templates/index-page-template";

// markup
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
      <IndexPageTemplate
          image={frontmatter.image}
          bannerImage={frontmatter.bannerImage}
          title={frontmatter.title}
          bannerStrongText={frontmatter.bannerStrongText}
          bannerText={frontmatter.bannerText}
      />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        bannerStrongText
        bannerText
        bannerImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;