import React from 'react';
import { Link } from 'gatsby';

const BlogList: React.FC<any> = ({ posts }) => {
  return (
    <>
      {posts.map(post => {
        return (
          <div>
            <Link to={post.fields.pagePath}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default BlogList;
