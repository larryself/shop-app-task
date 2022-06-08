import styled from 'styled-components';
import { BREAKPOINTS } from 'contants/breakpoints';
import { COLORS } from 'contants/colors';
import { FONT_SIZES, FONT_WEIGHT } from 'contants/font';

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Main = styled.div`
  flex: 1 0 auto;
  padding: 32px 0;
`;

export const ContentInner = styled.div`
  display: flex;
  width: 100%;
  gap: 64px;
  @media (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
  }
`;

export const Total = styled.div`
  max-width: 368px;
  width: 100%;
  @media (max-width: ${BREAKPOINTS.md}) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-weight: ${FONT_WEIGHT.md};
  font-size: ${FONT_SIZES.xl};
  line-height: 3.2rem;
`;

export const CartContent = styled.div`
  flex: 1;
`;

export const CartList = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: ${COLORS.RED};
  padding: 10px 28px;
  color: ${COLORS.WHITE};
  margin-left: 7px;
  margin-top: 64px;
`;

export const Titles = styled.h4`
  padding-left: 7px;
  font-weight: ${FONT_WEIGHT.md};
  font-size: ${FONT_SIZES.lg};
  line-height: 32px;
  color: ${COLORS.DARK_GREY};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Row = styled.li`
  padding-left: 7px;
  display: flex;
  justify-content: space-between;
`;

export const RowTitle = styled.p`
  font-size: ${FONT_SIZES.md};
  line-height: 1.5;
  color: ${COLORS.GREY};
`;

export const SumRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;


export const Price = styled.p`
  font-size: ${FONT_SIZES.md};
  line-height: 24px;
`;

export const Line = styled.div`
  border: 1px solid ${COLORS.MIDDLE_GREY};
  margin-top: 22px;
  margin-bottom: 24px;
`;
