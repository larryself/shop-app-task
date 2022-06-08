import React from 'react';
import { NextPage } from 'next';
import { HomePage } from 'components/homePage/homePage';
import { Layout } from 'components/layout/layout';

const Name: NextPage = () => (
  <Layout>
    <HomePage/>
  </Layout>
);

export default Name;
