import { COLORS } from 'contants/colors';
import { FONT_SIZES } from 'contants/font';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap
`;
export const Inner = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
`;
export const Track = styled.div`
  height: 2px;
  width: 100%;
  border-radius: 5px;
  align-self: center;
`;

export const Thumb = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${COLORS.BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThumbValue = styled.div`
  position: absolute;
  top: 12px;
  color: ${COLORS.BLACK};
  font-weight: bold;
  font-size: ${FONT_SIZES.xs};
  line-height: 1.833;
  font-family: inherit;
  padding: 4px;
  border-radius: 4px;
  background-color: transparent;
`;
