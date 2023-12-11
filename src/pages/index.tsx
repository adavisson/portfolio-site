import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/styles.scss";
import Image from "../components/Image/Image";
import profilePic from "../images/profile2.jpg";

const IndexPage: React.FC = () => {
  return (
    <main>
      <title>Home Page</title>
      <div className="home-content">
        <h1>Welcome</h1>
        <Image imgSrc={profilePic} />
        <div className="text-container">
          <p>
            I am a Full Stack Engineer and I am currently working as a React
            Developer where I work with ReactJS on the frontend piece of our
            application and NodeJS on the backend. Before I was a developer I
            worked for about 5 years as a Systems Administrator managing a wide
            variety of networks and systems. I have a passion for learning new
            technologies and staying up to date with the latest trends in
            Software Development. I have experience working on highly
            collaborative teams, and I value effective communication. I welcome
            unique and challenging problems, and I enjoy finding ways to
            automate tasks and processes.
          </p>
          <p>
            Most of my work is writing Typescript using ReactJS and NodeJS, but
            I have built many other projects using a variety of other languages
            and frameworks, including: Ruby, Rails, GraphQL, Apollo, Vue, and
            React-Native. Check out my Resume and Projects page to learn more
            about me and what I am working on.
          </p>
          <p>
            A little bit more about me, I grew up in South Carolina and went to
            Clemson University (Go Tigers!&#128047;). After graduating with a
            degree in Computer Information Systems, I lived to Charleson, SC for
            about 3 years and then moved to Denver, CO where I now call home. My
            hobbies include golf, snowboarding, running, and going hiking and
            camping with my wife.
          </p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
