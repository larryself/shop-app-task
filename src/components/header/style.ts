import styled from 'styled-components';
import { FONT_SIZES } from '../../contants/font';

export const Header = styled.header`
  border-bottom: 1px solid var(--middle-grey);
  padding-top: 26px;
  padding-bottom: 18px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const A = styled.a`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const Title = styled.h1`
  font-size: ${FONT_SIZES.xxl};
  line-height: 1;
`;
