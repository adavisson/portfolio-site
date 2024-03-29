import React from "react";
import { graphql, Link } from "gatsby";
import Button from "../components/Button/Button";
import "../styles/styles.scss";

const BlogPost: React.FC<any> = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div className="blog-post">
      <Link to="/blog">
        <Button>back to blog</Button>
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
