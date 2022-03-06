import React, {useEffect, useState} from 'react';
import CardList from "../cardList/cardList";
import Footer from "../footer/footer";
import styled from "styled-components";
import {useAppSelector} from "../../hooks/useAppSelector";
import Modal from "../modal/modal";
import {useRouter} from "next/router";
import { useGetProductsQuery} from "../../store/product/product";
import TypeBar from "../typeBar/typeBar";

const Container = styled.div`
  max-width: 978px;
  width: 100%;`
;

const HomePage = () => {
    const {product} = useAppSelector(state => state.openProduct);
    const router = useRouter();
    const {data,isFetching} = useGetProductsQuery();
    const {query} = router;
    return (
        <>
            <TypeBar/>
            <Container>
                <section>
                    <h2>{query.name ? query.name : 'All products'}</h2>
                    {!isFetching && <CardList products={data}/>}
                </section>
                <Footer/>
            </Container>
            {product.length > 0 && <Modal product={product[0]}/>}
        </>
    );
};

export default HomePage;