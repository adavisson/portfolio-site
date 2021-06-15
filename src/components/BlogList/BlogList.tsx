import React from 'react';
import { Link } from 'gatsby';
import BlogCard from '../BlogCard/BlogCard';

const BlogList: React.FC<any> = ({ posts }) => {
  return (
    <div className='blog-list'>
      {posts.map(post => {
        return (
          // <div>
          //   <Link to={post.fields.pagePath} className='blog-link'>
          //     <h3>{post.frontmatter.title}</h3>
          //   </Link>
          // </div>
          <BlogCard
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            path={post.fields.pagePath}
          />
        );
      })}
    </div>
  );
};

export default BlogList;
