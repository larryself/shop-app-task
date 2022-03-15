import styled from "styled-components";
import {FONT_SIZES, FONT_WEIGHT} from "../../contants/font";

export const Section = styled.section`
  max-width: 302px;
  width: 100%;
`;

export const Title = styled.h4`
  font-weight: ${FONT_WEIGHT.md};
  font-size: ${FONT_SIZES.md};
  line-height: 1.5;
  margin-bottom: 22px;
`;

export const Item = styled.div`
  padding: 25px;
  
  &:first-child {
    padding-top: 0;
  }
  
  &:not(:last-child) {
    padding-bottom: 70px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
`;
