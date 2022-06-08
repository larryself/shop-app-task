import React from 'react';
import { AppProps } from 'next/app';
import { rootStore, RootStoreContext } from 'store/store';
import { GlobalStyles } from 'styles/style';
import Head from 'next/head';
import { PageHeader } from 'components/header/header';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <RootStoreContext.Provider value={rootStore}>
      <GlobalStyles/>
      <Head>
        <title>Sneaker city</title>
        <meta charSet={'utf-8'}/>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
      </Head>
      <PageHeader/>
      <Component {...pageProps} />
    </RootStoreContext.Provider>
);
export default MyApp;


