import type { NextPage } from 'next';
import React from 'react';
import { HomePage } from 'components/homePage/homePage';
import { Layout } from 'components/layout/layout';

const Index: NextPage = () => (
    <Layout>
      <HomePage/>
    </Layout>
  );
export default Index;
