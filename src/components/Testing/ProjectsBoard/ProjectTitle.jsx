import styled, { css, keyframes } from "styled-components";

const first = keyframes`
  0% {
    opacity: 0.5;
    transform: translate(-4px, -1px);
  }
  30% {
     transform: translate(10px, 4px);
  }
  60% {
    transform: translate(-5px, 3px);
  }
  90% {
    transform: translate(8px, -1px);
  }
  100%{
    opacity: 0.5;
    transform: translate(0px, 0px);
  }
`;

const second = keyframes`
  0% {
    opacity: 0.5;
    transform: translate(10px, 1px);
  }
  30% {
     transform: translate(-5px, -4px);
  }
  60% {
    transform: translate(5px, 3px);
  }
  90% {
    transform: translate(-10px, -1px);
  }
  100%{
    opacity: 0.5;
    transform: translate(0px, 0px);
  }
`;

const third = keyframes`
  0% {
    opacity: 0.5;
    color: cyan;
  }
  100%{
    opacity: 0.5;
    color: cyan;
  }
`;

const TitleContainer = styled.div`
  width: 260px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 40px;
  font-weight: 800;
  text-shadow: 0 0 7px black;
  transform: translateZ(50px);

  &:hover > :nth-child(1) {
    animation: ${() => css`0.5s ${first} 1s linear`};
  }

  &:hover > :nth-child(2) {
    animation: ${() => css`0.5s ${second} 1s linear`};
  }

  &:hover > :nth-child(3) {
    animation: ${() => css`0.5s ${third} 1s linear`};
  }
`;

const Title = styled.span`
  opacity: 1;
  position: absolute;
  top: 0;
  left: 30%;
  color: ${({ $color }) => $color};
`;

function ProjectTitle({ title }) {
  return (
    <TitleContainer>
      <Title $color="lime">{title}</Title>
      <Title $color="pink">{title}</Title>
      <Title $color="#a08eb6">{title}</Title>
    </TitleContainer>
  );
}

export default ProjectTitle;
