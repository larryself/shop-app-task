import React from 'react';
import { NextPage } from 'next';
import { CartPage } from 'components/cartPage/cartPage';
import { Layout } from 'components/layout/layout';

const Cart: NextPage = () => (
  <Layout>
    <CartPage/>
  </Layout>
);

export default Cart;
