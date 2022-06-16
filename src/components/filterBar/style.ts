import styled from 'styled-components';
import { BREAKPOINTS } from 'contants/breakpoints';
import { COLORS } from 'contants/colors';
import { FONT_SIZES, FONT_WEIGHT } from 'contants/font';

export const Section = styled.section`
  display: flex;
  width: 100%;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;

  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    padding-bottom: 50px;
    border-bottom: 1px solid ${COLORS.MIDDLE_GREY};
    gap: 20px;
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: column;
    max-width: 302px;
    margin-left: -19px;
  }
`;

export const Title = styled.h4`
  font-weight: ${FONT_WEIGHT.md};
  font-size: ${FONT_SIZES.md};
  line-height: 1.5;
  margin-bottom: 22px;
`;

export const Item = styled.div`
  padding: 25px;

  @media (max-width: ${BREAKPOINTS.lg}) {
    flex: 1;
  }
  @media (min-width: ${BREAKPOINTS.lg}) {
    &:first-child {
      padding-top: 0;
    }

    &:not(:last-child) {
      padding-bottom: 70px;
      border-bottom: 1px solid ${COLORS.MIDDLE_GREY};
    }
  }
`;
