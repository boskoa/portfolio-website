import styled, { css, keyframes } from "styled-components";

const gradienting = keyframes`
  0% {
    background-position: 0% 0%;
  }
  10% {
    background-position: 23% 25%;
  }
  20% {
    background-position: 58% 0%;
  }
  30% {
    background-position: 72% 21%;
  }
  40% {
    background-position: 100% 58%;
  }
  50% {
    background-position: 84% 71%;
  }
  60% {
    background-position: 72% 100%;
  }
  70% {
    background-position: 46% 78%;
  }
  80% {
    background-position: 22% 54%;
  }
  90% {
    background-position: 0% 21%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const StyledBox = styled.div`
  background: radial-gradient(circle at 10% 10%, red 5%, transparent 70%),
    radial-gradient(circle at 90% 20%, blue 5%, transparent 70%),
    radial-gradient(circle at 50% 60%, lime 5%, transparent 70%);
  background-size: 200% 200%;
  background-repeat: no-repeat;
  width: 200px;
  height: 100px;
  margin-top: 20px;

  &:hover {
    animation: ${() => css`5s ${gradienting} linear infinite`};
  }
`;

function GradientBox() {
  return <StyledBox />;
}

export default GradientBox;
