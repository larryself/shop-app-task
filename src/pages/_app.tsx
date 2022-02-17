import '../styles/index.css'
import {AppProps} from 'next/app'
import Head from "next/head";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <title>Online shop app</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
