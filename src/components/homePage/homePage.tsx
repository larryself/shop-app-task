import React, { FC, useEffect, useState } from 'react';
import { Product } from '../../types';
import CardList from '../cardList/cardList';
import Footer from '../footer/footer';
import { useAppSelector } from '../../hooks/useAppSelector';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import { useRouter } from 'next/router';
import { useGetProductsQuery } from '../../store/product/product';
import TypeBar from '../typeBar/typeBar';
import { Main, Container } from './style';
import { Wrapper } from '../wrapper/wrapper';

const HomePage: FC = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [price, setPrice] = useState<number[]>([]);
  const [rating, setRating] = useState<number[]>([]);
  const {open, products} = useAppSelector(state => state.product);
  const router = useRouter();
  const {isFetching} = useGetProductsQuery();
  const {query} = router;

  const getPrice = (products: Product[]) => {
    const price = products.map(product => product.price)
    const minPrice = Math.min(...price);
    const maxPrice = Math.max(...price);
    setPrice([minPrice, maxPrice]);
  }
  const getRating = (products: Product[]) => {
    const rating = products.map(product => product.rating.rate)
    const maxRating = Math.max(...rating);
    const minRating = Math.min(...rating);
    setRating([minRating, maxRating])
  }
  const sortProduct = (category?: string | string[] | undefined) => {
    if (!category) {
      setProduct(products);
    } else {
      const sortedProduct = products.filter(el => el.category === category)
      setProduct(sortedProduct);
    }

  }
  useEffect(() => {
    if (products.length) {
      sortProduct(query.name)
    }
  }, [query.name, products])
  useEffect(() => {
    if (product.length) {
      getPrice(product);
      getRating(product);
    }
  }, [product])
  return (
    <Main>
      <Wrapper>
        <TypeBar price={price} rating={rating}/>
        <Container>
          <section style={{flex: '1 0 auto'}}>
            <h2>{query.name ? query.name : 'All products'}</h2>
            {products && <CardList products={product}/>}
          </section>
          <div style={{flex: '0 0 auto'}}>
            <Footer/>
          </div>
        </Container>
        {open && <Modal product={open}/>}
      </Wrapper>
      {isFetching && <Loader/>}
    </Main>

  );
};

export default HomePage;
