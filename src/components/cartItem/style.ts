import styled from 'styled-components';
import { COLOR } from '../../contants/color';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.04);
  display: flex;
  padding: 24px 32px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Inner = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  width: 50%;
`;

export const ImgWrapper = styled.div`
  padding: 8px 12px;
  background: ${COLOR.white};
  border-radius: 8px;
`;

export const Price = styled.p`
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px;
  line-height: 24px;
`;

export const TotalInner = styled.div`
  width: 100px;
  text-align: end;
`;
