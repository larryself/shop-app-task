import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  max-width: 1312px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;
export const Wrapper = ({ children }: any) => <Wrap>{children}</Wrap>;