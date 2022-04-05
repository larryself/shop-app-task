import styled from 'styled-components';

export const Main = styled.main`
  flex: 1 0 auto;
  padding: 32px 0;
`
export const Container = styled.div`
  max-width: 978px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Inner = styled.div`
  display: flex;
  height: 100%;
  gap: 64px;
  @media(max-width: 450px) {
    flex-direction: column;
    align-items: center;
}
`;
