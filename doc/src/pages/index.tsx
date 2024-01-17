import React from 'react';
import Layout from '@theme/Layout';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './homepage';

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Kitra"
    >
      <main>
        <Homepage />
      </main>
    </Layout>
  );
}
