import styled from 'styled-components';
import { COLORS } from 'contants/colors';
import { FONT_SIZES } from 'contants/font';

export const Wrap = styled.footer`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.GREY};
  border-top: 1px solid ${COLORS.MIDDLE_GREY};
  padding-top: 32px;
  padding-bottom: 67px;
  flex-wrap: wrap;
  align-items: center;
`;

export const A = styled.a`
  display: flex;
  cursor: pointer;
  padding: 8px;
  background: ${COLORS.LIGHT_GREY};
  border-radius: 8px
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Phone = styled.p`
  font-size: ${FONT_SIZES.md};
  line-height: 1.5;
`;

export const Copyright = styled.p`
  font-size: ${FONT_SIZES.sm};
  line-height: 1.285;
`;
