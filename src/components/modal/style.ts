import styled from 'styled-components';
import { BREAKPOINTS } from '../../contants/breakpoints';
import { COLORS } from '../../contants/colors';
import { FONT_SIZES, FONT_WEIGHT } from '../../contants/font';

export const ModalBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${COLORS.WHITE_GREY};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  background: ${COLORS.WHITE};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.LIGHT_GREY};
  padding: 96px 64px;
  @media (max-width: ${BREAKPOINTS.lg}) {
    padding: 56px 24px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    padding: 26px 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TitleInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  width: 70%;
  font-weight: ${FONT_WEIGHT.xxl};
  font-size: ${FONT_SIZES.xxl};
  line-height: 1;
`;

export const FavoriteBtn = styled.button`
  display: flex;

  &:hover {
    opacity: .5;
  }
`;

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  padding: 32px 64px 96px;
  gap: 18px;
  @media (max-width:  ${BREAKPOINTS.lg}) {
    padding: 28px 24px 56px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    padding: 24px 10px ;
  }
`;

export const Button = styled.button`
  padding: 10px 24px;
  background: ${COLORS.RED};
  color: ${COLORS.WHITE};

  &:hover, &:focus {
    opacity: 0.4;
  }
`;

export const ImgInner = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  max-width: 584px;
  max-height: 456px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Price = styled.p`
  font-weight: ${FONT_WEIGHT.md};
  font-size: ${FONT_SIZES.lg};
  line-height: 1.555;
  color: ${COLORS.GREY};
`

export const BtnInner = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
