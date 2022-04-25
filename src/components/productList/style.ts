import styled from 'styled-components';
import { BREAKPOINTS } from 'contants/breakpoints';

export const Container = styled.div`
  position: relative;
`;

export const List = styled.ul`
  max-width: 978px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 64px;
  margin-top: 24px;
  @media (max-width:  ${BREAKPOINTS.lg}) {
    grid-template-columns: repeat(2, 1fr);
  };
  @media (max-width: ${BREAKPOINTS.sm}) {
    grid-template-columns: repeat(1, 1fr);
  };
`;
