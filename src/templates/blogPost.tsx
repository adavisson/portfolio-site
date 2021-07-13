import React from 'react';
import { graphql, Link } from 'gatsby';
import Button from '../components/Button/Button';

const BlogPost: React.FC<any> = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div className='blog-post'>
      <Link to='/blog'>
        <Button text='back to blog' />
      </Link>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
