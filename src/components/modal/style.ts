import styled from 'styled-components';
import Image from 'next/image';
import { BREAKPOINTS } from 'contants/breakpoints';
import { COLORS } from 'contants/colors';
import { FONT_SIZES, FONT_WEIGHT } from 'contants/font';

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
  max-width: 1244px;
  width: 80%;
  @media (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
    justify-content: center;
  }
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
    padding: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: ${BREAKPOINTS.md}) {
    gap: 10px;
  }
`;

export const TitleInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  width: 80%;
  font-weight: ${FONT_WEIGHT.xxl};
  font-size: ${FONT_SIZES.xxl};
  line-height: 1;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
    -webkit-line-clamp: 2;
    font-size: ${FONT_SIZES.xl};
  }
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
  @media (max-width: ${BREAKPOINTS.lg}) {
    padding: 28px 24px 56px;
  }
  @media (max-width: ${BREAKPOINTS.md}) {
    max-width: 100%;
    padding: 10px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    gap: 8px
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

export const Img = styled(Image)`
  object-fit: contain;
`;

export const Price = styled.p`
  font-weight: ${FONT_WEIGHT.md};
  font-size: ${FONT_SIZES.lg};
  line-height: 1.555;
  color: ${COLORS.GREY};
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: ${FONT_SIZES.sm};
  }
`;

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
  @media (max-width: ${BREAKPOINTS.sm}) {
    gap: 5px;
  }
`;

export const TitleDescInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleDesc = styled.h3`
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: ${FONT_SIZES.md};
  }
`;

export const ButtonChevron = styled.button<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => !props.isOpen && 'rotate(180deg)'};
`;

export const Description = styled.p<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: ${FONT_SIZES.sm};
  }
`;
