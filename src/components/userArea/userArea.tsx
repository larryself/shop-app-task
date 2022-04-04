import React, { FC } from 'react';
import Link from 'next/link';
import { Cart } from '../icon/cart/cart';
import { Favorites } from '../icon/favorites/favorites';
import { User } from '../icon/user/user';
import { Container, A } from './style';

export const UserArea: FC = () => {
  return (
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
};
