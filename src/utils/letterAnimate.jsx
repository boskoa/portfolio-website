/* eslint-disable indent */
import styled, { css, keyframes } from "styled-components";

const letterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    opacity: 1;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const rubber = keyframes`
  0% {
    transform: scaleY(0.5);
  }
  50% {
    color: gold;
    transform: scaleY(1.15);
  }
  70% {
    color: gold;
    transform: scaleY(0.85);
  }
  100% {
    opacity: 1;
    color: gold;
    transform: scaleY(1);
  }
`;

export const StyledLetter = styled.span`
  display: inline-block;
  opacity: ${({ $animateIntro }) => ($animateIntro ? 0 : 1)};
  min-width: 10px;
  animation: ${({ $delay, $animateIntro }) =>
    $animateIntro
      ? css`0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${letterAnimation} ${
          $delay * 100 + 500
        }ms forwards`
      : ""};

  &:hover {
    animation: ${({ $animateIntro }) =>
      $animateIntro ? "" : css`0.5s ease-in ${rubber} both`};
  }
`;

function letterAnimate(letters, start, animateIntro) {
  const lettersArray = letters.split("");

  return (
    <span>
      {lettersArray.map((l, i) => (
        <StyledLetter
          key={l + i}
          $delay={start + i}
          $animateIntro={animateIntro}
        >
          {l}
        </StyledLetter>
      ))}
    </span>
  );
}

export default letterAnimate;
