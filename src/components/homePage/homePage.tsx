import React, {FC} from 'react';
import CardList from "../cardList/cardList";
import Footer from "../footer/footer";
import {useAppSelector} from "../../hooks/useAppSelector";
import Modal from "../modal/modal";
import {useRouter} from "next/router";
import { useGetProductsQuery} from "../../store/product/product";
import TypeBar from "../typeBar/typeBar";
import {Container} from "./style";

const HomePage : FC = () => {
    const {product} = useAppSelector(state => state.openProduct);
    const router = useRouter();
    const {data,isFetching} = useGetProductsQuery();
    const {query} = router;
    return (
        <>
            <TypeBar/>
            <Container>
                <section style={{flex: '1 0 auto', height: '100%'}}>
                    <h2>{query.name ? query.name : 'All products'}</h2>
                    {!isFetching && <CardList products={data}/>}
                </section>
                <div style={{ flex: '0 0 auto'}}>
                <Footer/>
                </div>
            </Container>
            {product.length > 0 && <Modal product={product[0]}/>}
        </>
    );
};

export default HomePage;
