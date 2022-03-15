import React, {FC} from 'react';
import Link from 'next/link';
import User from '../../assets/img/user.svg';
import Favorite from '../../assets/img/favorites.svg';
import Cart from '../../assets/img/cart.svg';
import {Container, A} from "./style.";

const UserArea: FC = () => {
    return (
        <Container>
            <Link href={'/cart'} passHref><A><Cart/></A></Link>
            <Link href={'/favorites'} passHref><A><Favorite/></A></Link>
            <Link href={'/user'} passHref><A><User/></A></Link>
        </Container>
    );
};

export default UserArea;
