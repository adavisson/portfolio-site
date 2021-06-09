import React from 'react';
import { graphql, Link } from 'gatsby';

const BlogPost: React.FC<any> = ({ data }) => {
  const post = data.markdownRemark;

  return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
};

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MM.DD.YYYY")
      }
    }
  }
`;

export default BlogPost;
