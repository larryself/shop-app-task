import type {NextPage} from 'next'
import React from "react";
import Layout from "../components/layout/layout";
import HomePage from "../components/homePage/homePage";

const Index: NextPage = () => {
    return (
        <Layout>
            <HomePage/>
        </Layout>
    )
}


export default Index
