import * as React from "react";
import "../styles/styles.scss";
import Image from "../components/Image/Image";
import profilePic from "../images/profile.jpg";

const IndexPage: React.FC = () => {
  return (
    <main>
      <title>Home Page</title>
      <div className="home-content">
        <h1>Welcome</h1>
        <Image imgSrc={profilePic} />
        <div className="text-container">
          <p>
            I am a Software Engineer in Denver, CO where I live with my wife and
            toddler son. I am an avid runner and I enjoy getting out to bike and
            play golf as well. I am slowly transitioning this site from a
            portfolio site to more of a personal space where I can share things
            that are interesting to me and things that I am currently working
            on, so please bear with me as I get this thing going.
          </p>
          <p>
            If you are interested in learning more about me professionally,
            please refer to the links at the bottom of the page.
          </p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
