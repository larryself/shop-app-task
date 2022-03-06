import styled from "styled-components";

const AnimationBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(196, 196, 196, 0.3);`
export const Animation = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  width: 63px;
  height: 63px;
  transition: all 0.3s ease-in-out;

  &::after {
    content: ' ';
    display: block;
    background: none;
    animation: curcle 1.5s ease-in-out infinite;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    border: 4px solid;
    border-color: currentColor transparent;
  }

  @keyframes curcle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }`

export const Loader = () => (
    <AnimationBox>
        <Animation/>
    </AnimationBox>
);