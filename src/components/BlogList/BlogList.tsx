import React from 'react';
import { Link } from 'gatsby';
import BlogCard from '../BlogCard/BlogCard';

const BlogList: React.FC<any> = ({ posts }) => {
  return (
    <div className='blog-list'>
      {posts.map(post => {
        return (
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
