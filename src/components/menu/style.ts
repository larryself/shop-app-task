import styled from "styled-components";
import {COLOR} from "../../contants/color";
import {FONT_SIZES} from "../../contants/font";

export const Nav = styled.nav`
`;

export const MenuList = styled.ul`
  display: flex;
  column-gap: 32px;
  @media (max-width: 640px){
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuItem = styled.li`
`;

export const ItemLink = styled.a`
  display: flex;
  cursor: pointer;
  position: relative;
  font-size: ${FONT_SIZES.sm};
  &::after{
    position: absolute;
    content: '';
    display: none;
    height: 2px;
    width: 100%;
    background-color: ${COLOR.black};
    bottom: -4px;
  }
  &:hover::after{
    display: block;
  }
`;
