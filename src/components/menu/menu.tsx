import {menuItems} from "../../types";
import styled from "styled-components";
import Link from 'next/link';

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
  &:hover::after{
    position: absolute;
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background-color: #000;
    bottom: -4px;
  }
`;

const Menu = () => {
    const menuItems = ["Men's clothing", "Jewelery", "Electronics", "Women's clothing"];
    return (
        <Nav>
            <MenuList>
                {
                    menuItems.map((menuItem: any) => (
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