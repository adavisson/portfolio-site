import * as React from 'react';
import '../styles/styles.scss';
import Image from '../components/Image/Image';
import profilePic from '../images/profile.jpg';

const IndexPage: React.FC = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Home</h1>
      <Image imgSrc={profilePic} />
    </main>
  );
};

export default IndexPage;
