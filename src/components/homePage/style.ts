import styled from 'styled-components';
import { BREAKPOINTS } from 'contants/breakpoints';

export const Main = styled.main`
  flex: 1 0 auto;
  padding-top: 32px;
`;
export const Container = styled.div`
  max-width: 978px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Inner = styled.div`
  display: flex;
  height: 100%;
  gap: 64px;
  @media (max-width: ${BREAKPOINTS.lg}) {
    flex-direction: column;
  }
  @media (max-width: ${BREAKPOINTS.xs}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Section = styled.section`
  flex: 1 0 auto;
`;

export const FooterInner = styled.div`
  flex: 0 0 auto;
`;
