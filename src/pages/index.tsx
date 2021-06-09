import * as React from 'react';
import '../styles/styles.scss';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <h1>Andrew Davisson</h1>
        <Button />
      </main>
    </Layout>
  );
};

export default IndexPage;
