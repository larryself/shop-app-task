import styled from 'styled-components';
import { FONT_SIZES, FONT_WEIGHT } from '../../contants/font';

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Container = styled.div`
  flex-grow: 1;
`

export const ImgContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Name = styled.p`
  font-weight: ${FONT_WEIGHT.md};
  font-size: ${FONT_SIZES.lg};
  line-height: 1.334;
  margin-top: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const Price = styled.p`
  color: rgba(0, 0, 0, 0.65);
  margin-top: 8px;
  margin-bottom: 24px;
`;
