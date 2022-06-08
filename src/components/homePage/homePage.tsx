import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { useProducts } from 'hooks/useProducts';
import { ProductList } from 'components/productList/productList';
import { Footer } from 'components/footer/footer';
import { Modal } from 'components/modal/modal';
import { useRouter } from 'next/router';
import { FilterBar } from 'components/filterBar/filterBar';
import { Main, Container, Inner, Section, FooterInner } from 'components/homePage/style';
import { Wrapper } from 'components/wrapper/wrapper';
import { useStore } from 'store/store';

export const HomePage: FC = observer(() => {
  const { productStore: { modalIsOpen } } = useStore();
  const { query: { name } } = useRouter();
  const { products, isLoading } = useProducts(name);
  return (
    <Main>
      <Wrapper>
        <Inner>
          <FilterBar/>
          <Container>
            <Section>
              <h2>{name || 'All products'}</h2>
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
});
