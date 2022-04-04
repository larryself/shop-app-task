import React, { FC, useEffect, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { Product } from '../../types';
import { ProductList } from '../productList/productList';
import { Footer } from '../footer/footer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Modal } from '../modal/modal';
import { useRouter } from 'next/router';
import { TypeBar } from '../typeBar/typeBar';
import { Main, Container, Inner } from './style';
import { Wrapper } from '../wrapper/wrapper';

const HomePage: FC = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const {open, products, currentPrice, currentRating} = useAppSelector(state => state.product);
  const {query: {name}} = useRouter();
  const {setPrice, setRating, setCurrentRating, setCurrentPrice} = useAction();

  const getPrice = (products: Product[], categoryName: string | string[] | undefined) =>{
    const currentProduct =  categoryName ? products.filter(product=> product.category === categoryName) : products
    const price = currentProduct.map(product => product.price)
    const minPrice = Math.min(...price);
    const maxPrice = Math.max(...price);
    return [minPrice, maxPrice];
  }
  const getRating = (products: Product[], categoryName: string | string[] | undefined) =>{
    const currentProduct =  categoryName ? products.filter(product=> product.category === categoryName) : products
    const rating = currentProduct.map(product=> product.rating.rate)
    const minRating = Math.min(...rating);
    const maxRating = Math.max(...rating);
    return [minRating,maxRating]
  }
  const sortProduct = (сurrentPrice: number[], currentRating: number[], category: string | string[] | undefined) => {
    const sortedByCategory = category ? products.filter(product => product.category === category) : products;
    const sortedByPrice = sortedByCategory.filter(product => product.price >= currentPrice[0] && product.price <= currentPrice[1]);
    const sortedByRating = sortedByPrice.filter(product => product.rating.rate >= currentRating[0] && product.rating.rate <= currentRating[1])
    setProduct(sortedByRating)
  }
  useEffect(() => {
    if (products.length) {
      sortProduct(currentPrice, currentRating, name)
    }
  }, [name, products, currentRating, currentPrice])

  useEffect(()=>{
    if(products.length) {
      const price = getPrice(products,name)
      const rating = getRating(products,name)
      setPrice(price)
      setRating(rating)
      setCurrentRating(rating)
      setCurrentPrice(price)
    }
  },[name])
  return (
    <Main>
      <Wrapper>
        <Inner>
          <TypeBar/>
          <Container>
            <section style={{flex: '1 0 auto'}}>
              <h2>{name ? name : 'All products'}</h2>
              {!!product.length && <ProductList products={product}/>}
            </section>
            <div style={{flex: '0 0 auto'}}>
              <Footer/>
            </div>
          </Container>
          {open && <Modal product={open}/>}
        </Inner>
      </Wrapper>
    </Main>

  );
};

export default HomePage;
