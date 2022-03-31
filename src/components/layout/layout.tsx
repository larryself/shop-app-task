import React from 'react';
import PageHeader from "../header/header";
import {Wrapper} from "../wrapper/wrapper";
import {Main} from "./style";

const Layout = ({children}: any) => {
    return (
        <>

            <Main>
                <Wrapper>
                    {children}
                </Wrapper>
            </Main>
        </>
    );
};

export default Layout;
