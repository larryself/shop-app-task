import React, { FC } from 'react';
import Link from 'next/link';
import { Cart } from 'components/icon/cart/cart';
import { Favorites } from 'components/icon/favorites/favorites';
import { User } from 'components/icon/user/user';
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
