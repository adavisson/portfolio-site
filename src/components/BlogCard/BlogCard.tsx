import React from "react";
import { Link } from "gatsby";

export interface BlogCardProps {
  title: string;
  date: string;
  subTitle?: string;
  path: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, subTitle, path }) => {
  return (
    <Link to={path}>
      <div className="blog-card">
        <h3>{title}</h3>
        {subTitle && <p>{subTitle}</p>}
        <p>{date}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
