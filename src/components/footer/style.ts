import styled from "styled-components";
import {FONT_SIZES} from "../../contants/font";

export const Wrap = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.65);
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 32px;
  padding-bottom: 67px;
`;

export const A = styled.a`
  display: flex;
  cursor: pointer;
  padding: 8px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 8px
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Phone = styled.p`
  font-size: ${FONT_SIZES.md};
  line-height: 1.5;
`;

export const Copyright = styled.p`
  font-size: ${FONT_SIZES.sm};
  line-height: 18px;
  margin-top: 8px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
