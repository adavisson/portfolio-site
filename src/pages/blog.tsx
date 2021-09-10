import * as React from 'react';
import { graphql } from 'gatsby';
import BlogList from '../components/BlogList/BlogList';
import '../styles/styles.scss';

const BlogPage: React.FC<any> = ({ data }) => {
  const { posts } = data.blogPosts;

  return (
    <main>
      <title>Blog</title>
      <div className='blog-posts'>
        <h1>Blog Posts</h1>
        <BlogList posts={posts} />
      </div>
    </main>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      posts: nodes {
        fields {
          slug
          pagePath
        }
        frontmatter {
          date(formatString: "MMM Do, YYYY")
          title
          author
        }
        excerpt
        id
      }
    }
  }
`;

export default BlogPage;
