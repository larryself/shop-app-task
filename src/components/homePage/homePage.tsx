import React, { FC } from 'react';
import { useProducts } from 'hooks/useProducts';
import { ProductList } from 'components/productList/productList';
import { Footer } from 'components/footer/footer';
import { useAppSelector } from 'hooks/useAppSelector';
import { Modal } from 'components/modal/modal';
import { useRouter } from 'next/router';
import { FilterBar } from 'components/filterBar/filterBar';
import { Main, Container, Inner } from 'components/homePage/style';
import { Wrapper } from 'components/wrapper/wrapper';

export const HomePage: FC = () => {
  const {open} = useAppSelector(state => state.product);
  const {query: {name}} = useRouter() ;
  const {products, isLoading} = useProducts(name);
  return (
    <Main>
      <Wrapper>
        <Inner>
          <FilterBar/>
          <Container>
            <section style={{flex: '1 0 auto'}}>
              <h2>{name ? name : 'All products'}</h2>
              {isLoading && <ProductList products={products}/>}
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
