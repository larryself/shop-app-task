import React from 'react';
import Head from "next/head";
import Loader from "../loader/loader";
import {useGetProductsQuery} from "../../store/product/product";
import PageHeader from "../header/header";
import {Wrapper} from "../wrapper/wrapper";
import {Main} from "./style";

const Layout = ({children}: any) => {
    const {isFetching} = useGetProductsQuery();
    return (
        <>
            <Head>
                <title>Shop app</title>
            </Head>
            <PageHeader/>
            <Main>
                <Wrapper>
                    {children}
                </Wrapper>
            </Main>
            {isFetching && <Loader/>}
        </>
    );
};

export default Layout;
