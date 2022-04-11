import React, { FC, useEffect } from 'react';
import { useProducts } from 'hooks/useProducts';
import { ProductList } from 'components/productList/productList';
import { Footer } from 'components/footer/footer';
import { useProductSelector } from 'hooks/useProductSelector';
import { Modal } from 'components/modal/modal';
import { useRouter } from 'next/router';
import { FilterBar } from 'components/filterBar/filterBar';
import { Main, Container, Inner, Section, FooterInner } from 'components/homePage/style';
import { Wrapper } from 'components/wrapper/wrapper';

export const HomePage: FC = () => {
  const {modalIsOpen} = useProductSelector();
  const {query: {name}} = useRouter() ;
  const {products, isLoading} = useProducts(name);
  return (
    <Main>
      <Wrapper>
        <Inner>
          <FilterBar/>
          <Container>
            <Section>
              <h2>{name ? name : 'All products'}</h2>
              {isLoading && <ProductList products={products}/>}
            </Section>
            <FooterInner>
              <Footer/>
            </FooterInner>
          </Container>
          {modalIsOpen && <Modal product={modalIsOpen}/>}
        </Inner>
      </Wrapper>
    </Main>

  );
};
