import styled from 'styled-components';
import { COLORS } from 'contants/colors';

export const AnimationBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLORS.WHITE_GREY};`

export const Animation = styled.span<{top: string}>`
  position: absolute;
  top: ${props => props.top};
  left: 44%;
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #1E1E1E 94%, #0000) top/11px 11px no-repeat,
  conic-gradient(#0000 0%, #1E1E1E);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 11px), #000 0);
  animation: spinner-c7wet2 1.2s infinite linear;

  @keyframes spinner-c7wet2 {
    100% {
      transform: rotate(1turn);
    }
  }`

