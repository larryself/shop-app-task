import styled from 'styled-components';
import { BREAKPOINTS } from 'contants/breakpoints';
import { COLORS } from 'contants/colors';
import { FONT_SIZES, FONT_WEIGHT } from 'contants/font';

export const Nav = styled.nav`
`;

export const MenuList = styled.ul<{isOpen?: boolean}>`
  display: flex;
  column-gap: 32px;
  @media (max-width: ${BREAKPOINTS.md}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    position: fixed;
    visibility: ${props => !props.isOpen ? 'hidden' : 'visibility'};
    z-index: 2;
    top: 0;
    left: ${props => !props.isOpen ? '-100%' : 0};
    width: 80%;
    height: 100%;
    margin: 0;
    padding: 0 20px;
    list-style: none;
    background-color: ${COLORS.BURGER_BG};
    box-shadow: 1px 0 6px ${COLORS.MIDDLE_GREY};
    transition-duration: .25s;
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
  @media (max-width: ${BREAKPOINTS.md}){
    font-weight: ${FONT_WEIGHT.xl};
    justify-content: center;
  }
`;

export const Blur = styled.div<{isOpen:boolean}>`
  ${props => props.isOpen && 
          `@media (max-width: ${BREAKPOINTS.md}) {
    backdrop-filter: blur(2px);
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  `}
`;
export const Burger = styled.div<{isOpen: boolean}>`
  @media (max-width: ${BREAKPOINTS.md}) {
    z-index: 3;
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: ${props => !props.isOpen ? `relative` : `fixed`};
    top: ${props => props.isOpen && '76px'};
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: ${props => props.isOpen ? `29px` : `20px`};
      height: 2px;
      background-color: #000;
      transform: ${props => props.isOpen && `rotate(-45deg) translateY(50%)`};
      transform-origin: bottom left;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: ${props => props.isOpen ? `29px` : `20px`};
      height: 2px;
      background-color: #000;
      transform: ${props => props.isOpen && `rotate(45deg) translateY(-50%)`};
      transform-origin: top left;

    }
  }
`;
export const BurgetIcon = styled.span<{isOpen: boolean}>`
  @media (max-width: ${BREAKPOINTS.md}) {
    ${props => props.isOpen && `
    transform: scale(0.1);
  `}
    position: absolute;
    bottom: 9px;
    width: 20px;
    height: 2px;
    background-color: #000;
  }
  `;
