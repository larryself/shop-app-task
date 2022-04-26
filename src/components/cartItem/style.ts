import styled from 'styled-components';
import Image from 'next/image';
import { BREAKPOINTS } from 'contants/breakpoints';
import { COLORS } from 'contants/colors';
import { FONT_SIZES } from 'contants/font';

export const Container = styled.div`
  background: ${COLORS.LIGHT_GREY};
  display: flex;
  padding: 24px 32px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  @media (max-width: ${BREAKPOINTS.xs}) {
    padding: 10px 12px;
    flex-direction: column;
  }
`;

export const Inner = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  width: 50%;
  @media (max-width: ${BREAKPOINTS.xs}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  min-width: 96px;
  min-height: 80px;
  padding: 8px 12px;
  background: ${COLORS.WHITE};
  border-radius: 8px;
`;

export const Img = styled(Image)`
  object-fit: contain;
`;

export const Title = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const Price = styled.p`
  color: ${COLORS.GREY};
  font-size: ${FONT_SIZES.md};
  line-height: 1.5;
`;

export const TotalInner = styled.div`
  width: 100px;
  text-align: end;
`;
