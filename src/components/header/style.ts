import { BREAKPOINTS } from 'contants/breakpoints';
import styled from 'styled-components';
import { COLORS } from 'contants/colors';
import { FONT_SIZES } from 'contants/font';

export const Header = styled.header`
  border-bottom: 1px solid ${COLORS.MIDDLE_GREY};
  padding-top: 26px;
  padding-bottom: 18px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: ${BREAKPOINTS.md}) {
    gap: 10px;
  }
`;

export const A = styled.a`
  display: flex;
  align-items: center;
  column-gap: 8px;
  @media (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: ${FONT_SIZES.xxl};
  line-height: 1;
`;
