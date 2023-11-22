import styled, { css, keyframes } from "styled-components";

const TitleContainer = styled.span`
  width: 260px;
  height: 30px;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 20px;
  border: 1px solid red;
  color: white;
  transform: translateZ(50px);
`;

const letterAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    color: gold;
    transform: scale(1.1);
  }
  70% {
    color: gold;
    transform: scale(0.9);
  }
  100% {
    color: gold;
    transform: scale(1);
  }
`;

const StyledLetter = styled.span`
  display: inline-block;
  //opacity: ${({ $animate }) => ($animate ? 0 : 1)};
  min-width: 6px;
  animation: ${({ $delay, $animate }) =>
    $animate
      ? css`0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${letterAnimation} ${
          $delay * 100 + 500
        }ms forwards`
      : ""};
`;

function ProjectTitle({ title, start, animate }) {
  const titleArray = title.split("");

  return (
    <TitleContainer>
      {titleArray.map((l, i) => (
        <StyledLetter key={l + i} $delay={start + i} $animate={animate}>
          {l}
        </StyledLetter>
      ))}
    </TitleContainer>
  );
}

export default ProjectTitle;
