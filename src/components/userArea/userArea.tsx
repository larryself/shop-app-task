import React, { FC } from 'react';
import Link from 'next/link';
import { Cart, Favorites, User } from 'components';
import { Container, A } from 'components/userArea/style';

export const UserArea: FC = () => (
  <Container>
    <Link href={'/cart'} passHref>
      <A>
        <Cart/>
      </A>
    </Link>
    <Link href={'/favorites'} passHref>
      <A>
        <Favorites/>
      </A>
    </Link>
    <Link href={'/user'} passHref>
      <A>
        <User/>
      </A>
    </Link>
  </Container>
);
