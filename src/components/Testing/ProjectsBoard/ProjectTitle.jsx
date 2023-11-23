import styled, { css, keyframes } from "styled-components";

const first = keyframes`
  0% {
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
    transform: translate(0px, 0px);
  }
`;

const second = keyframes`
  0% {
    transform: translate(-10px, 2px);
  }
  30% {
     transform: translate(5px, -5px);
  }
  60% {
    transform: translate(-5px, -1px);
  }
  90% {
    transform: translate(10px, 7px);
  }
  100%{
    transform: translate(0px, 0px);
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
    animation: ${() => css`0.6s ${first} 1s linear`};
  }

  &:hover > :nth-child(2) {
    animation: ${() => css`0.6s ${second} 1s ease-in`};
  }
`;

const Title = styled.span`
  opacity: 0.5;
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
      <Title $color="cyan">{title}</Title>
    </TitleContainer>
  );
}

export default ProjectTitle;
