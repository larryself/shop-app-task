import styled from 'styled-components';

export const List = styled.ul`
  max-width: 978px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 64px;
  margin-top: 24px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  };
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  };
`;
