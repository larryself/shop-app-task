import styled from 'styled-components';
import { COLORS } from '../../contants/colors';
import { FONT_SIZES } from '../../contants/font';

export const Container = styled.div`
  background: ${COLORS.LIGHT_GREY};
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
  background: ${COLORS.WHITE};
  border-radius: 8px;
`;
export const Img = styled.img`
  object-fit: contain;
`

export const Price = styled.p`
  color: ${COLORS.GREY};
  font-size: ${FONT_SIZES.md};
  line-height: 1.5;
`;

export const TotalInner = styled.div`
  width: 100px;
  text-align: end;
`;
