import React from 'react';
import Link from 'next/link';
import User from '../../assets/img/user.svg';
import Favorite from '../../assets/img/favorites.svg';
import Basket from '../../assets/img/basket.svg';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  column-gap: 32px;
`;
const A = styled.a`
  display: flex;
  cursor: pointer;
  &:hover {
    opacity: 0.2;
  }`
const UserArea = () => {
    return (
        <Container>
            <Link href={'/basket'} passHref><A><Basket/></A></Link>
            <Link href={'/favorites'} passHref><A><Favorite/></A></Link>
            <Link href={'/user'} passHref><A><User/></A></Link>
        </Container>
    );
};

export default UserArea;