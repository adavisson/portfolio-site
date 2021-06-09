import React from 'react';
import { graphql, Link } from 'gatsby';
import Button from '../components/Button/Button';

const BlogPost: React.FC<any> = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <React.Fragment>
      <Link to='/blog'>
        <Button text='back to blog' />
      </Link>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </React.Fragment>
  );
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
