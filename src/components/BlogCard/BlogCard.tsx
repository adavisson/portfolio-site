import React from 'react';
import { Link } from 'gatsby';

export interface IBlogCardProps {
  title: string;
  date: Date;
  subTitle?: string;
  path: string;
}

const BlogCard: React.FC<IBlogCardProps> = ({
  title,
  date,
  subTitle,
  path,
}) => {
  return (
    <Link to={path}>
      <div className='blog-card'>
        <h3>{title}</h3>
        {subTitle && <p>{subTitle}</p>}
        <p>{date}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
