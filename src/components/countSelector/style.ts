import styled from 'styled-components';
import { COLORS } from 'contants/colors';
import { FONT_SIZES } from 'contants/font';

export const Input = styled.input`
  text-align: center;
  width: 48px;
  height: 48px;
  border: 1px solid ${COLORS.MIDDLE_GREY};
  box-sizing: border-box;
  border-radius: 8px;
  font-size: ${FONT_SIZES.md};
  line-height: 1.5;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Button = styled.button`
  display: flex;

  &:disabled {
    opacity: 0.3;
  }
`;
