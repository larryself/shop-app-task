import styled from "styled-components";
import {COLOR} from "../../contants/color";
import {FONT_SIZES, FONT_WEIGHT} from "../../contants/font";

export const ModalBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(196, 196, 196, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentInner = styled.div`
  display: flex;
  background: ${COLOR.white};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.04);
  padding-top: 96px;
  padding-left: 64px;
  padding-right: 64px;
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
 display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
 font-weight: ${FONT_WEIGHT.xxl};
 font-size: ${FONT_SIZES.xxl};
 line-height: 100%;
`;

export const FavoriteBtn = styled.button`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 32px 64px;
`;

export const Button = styled.button`
  padding: 10px 24px;
  background: ${COLOR.red};
  color: ${COLOR.white};

  &:hover, &:focus {
    opacity: 0.4;
  }
`;

export const Img = styled.img`
  max-width: 584px;
  max-height: 456px;
  width: 100%;
  height: 100%;
`;

export const Price = styled.p`
  font-weight: ${FONT_WEIGHT.md};
  font-size: ${FONT_SIZES.lg};
  line-height: 1.334;
  color: rgba(0, 0, 0, 0.65)
`
