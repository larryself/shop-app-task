import styled from "styled-components";
import {FONT_SIZES, FONT_WEIGHT} from "../../contants/font";
import {COLOR} from "../../contants/color";

export const ContentInner = styled.div`
  display: flex;
  width: 100%;`

export const Total = styled.div`
`;

export const Title = styled.h2`
  font-weight: ${FONT_WEIGHT.md};
  font-size: ${FONT_SIZES.xl};
  line-height: 3.2rem;
`;

export const CartContent = styled.div`
  width: 100%;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: ${COLOR.red};
  padding: 10px 28px;
  color: ${COLOR.white};
  margin-left: 7px;
  margin-top:64px;
`;

export const Titles = styled.h4`
  padding-left: 7px;
  font-weight: ${FONT_WEIGHT.md};
  font-size: ${FONT_SIZES.lg};
  line-height: 32px;
  color: rgba(0, 0, 0, 0.75);
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

export const RowTitle= styled.p`
  font-size: ${FONT_SIZES.md};
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
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
  border: 1px solid rgba(${COLOR.black} 0.15);
  margin-top: 22px;
  margin-bottom: 24px;
`;
