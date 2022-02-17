import '../styles/index.css'
import {AppProps} from 'next/app'
import Head from "next/head";
import PageHeader from "../components/header/header";
import {Provider} from "react-redux";
import {store} from "../store/store";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <Provider store={store}>
            <Head>
                <title>Online shop app</title>
            </Head>
            <PageHeader/>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
