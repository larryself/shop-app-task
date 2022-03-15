import styled from "styled-components";
import {COLOR} from "../../contants/color";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.04);
  display: flex;
  padding: 24px 32px;
  align-items: center;
  gap: 24px;
`;

export const ImgWrapper = styled.div`
  padding: 8px 12px;
  background: ${COLOR.white};
  border-radius: 8px;
`;
