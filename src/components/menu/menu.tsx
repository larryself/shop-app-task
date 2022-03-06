import styled from "styled-components";
import Link from 'next/link';
import {useGetCategoryQuery, useGetProductsQuery} from "../../store/product/product";
import {useRouter} from "next/router";
import {useState} from "react";

const Nav = styled.nav`

`;
const MenuList = styled.ul`
  display: flex;
  column-gap: 32px;
`;
const MenuItem = styled.li`
`;
const ItemLink = styled.a`
  display: flex;
  cursor: pointer;
  position: relative;
  &::after{
    position: absolute;
    content: '';
    display: none;
    height: 2px;
    width: 100%;
    background-color: #000;
    bottom: -4px;
  }
  &:hover::after{
    display: block;
  }
`;


const Menu = () => {
    const {data} = useGetCategoryQuery();
    return (
        <Nav>
            <MenuList>
                {
                    data?.map((menuItem: any) => (
                        <MenuItem key={menuItem}>
                            <Link href={`/category/${menuItem}`} passHref>
                                <ItemLink>{menuItem}</ItemLink>
                            </Link>
                        </MenuItem>
                    ))
                }
            </MenuList>
        </Nav>
    );
};

export default Menu;