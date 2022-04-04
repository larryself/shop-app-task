import styled from 'styled-components';
import { FONT_SIZES } from '../../contants/font';

export const Container = styled.div`
  background: var(--light-grey);
  display: flex;
  padding: 24px 32px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Inner = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  width: 50%;
`;

export const ImgWrapper = styled.div`
  padding: 8px 12px;
  background: var(--white);
  border-radius: 8px;
`;
export const Img = styled.img`
  object-fit: contain;
`

export const Price = styled.p`
  color: var(--grey);
  font-size: ${FONT_SIZES.md};
  line-height: 1.5;
`;

export const TotalInner = styled.div`
  width: 100px;
  text-align: end;
`;
