import styled from 'styled-components';
import Image from 'next/image';
import { COLORS } from 'contants/colors';
import { FONT_SIZES, FONT_WEIGHT } from 'contants/font';

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Container = styled.div`
  flex-grow: 1;
`;

export const ImgContainer = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
`;

export const Img = styled(Image)`
  object-fit: contain;
`;

export const Name = styled.p`
  font-weight: ${FONT_WEIGHT.md};
  font-size: ${FONT_SIZES.lg};
  line-height: 1.444;
  margin-top: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const Price = styled.p`
  color: ${COLORS.GREY};
  margin-top: 8px;
  margin-bottom: 24px;
`;
