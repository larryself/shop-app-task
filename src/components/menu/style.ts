import styled from 'styled-components';
import { BREAKPOINTS } from '../../contants/breakpoints';
import { COLORS } from '../../contants/colors';
import { FONT_SIZES } from '../../contants/font';

export const Nav = styled.nav`
`;

export const MenuList = styled.ul`
  display: flex;
  column-gap: 32px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

export const MenuItem = styled.li`
`;

export const ItemLink = styled.a`
  display: flex;
  cursor: pointer;
  position: relative;
  font-size: ${FONT_SIZES.sm};

  &::after {
    position: absolute;
    content: '';
    display: none;
    height: 2px;
    width: 100%;
    background-color: ${COLORS.BLACK};
    bottom: -4px;
  }

  &:hover::after {
    display: block;
  }
`;
