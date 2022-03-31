import { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { GlobalStyles } from '../styles/style';
import Head from 'next/head';
import PageHeader from '../components/header/header';
import React from 'react';

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <Provider store={store}>
      <GlobalStyles/>
      <Head>
        <title>Sneaker city</title>
        <meta charSet={'utf-8'}/>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
      </Head>
      <PageHeader/>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
