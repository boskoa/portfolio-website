import styled, { css, keyframes } from "styled-components";

const letterAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledLetter = styled.span`
  display: inline-block;
  opacity: 0;
  animation: ${({ $delay }) =>
    css`1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${letterAnimation} ${
      $delay * 100 + 500
    }ms forwards`};
`;

function letterAnimate(letters, start) {
  const lettersArray = letters.split("");

  return (
    <span>
      {lettersArray.map((l, i) => (
        <StyledLetter key={l + i} $delay={start + i}>
          {l}
        </StyledLetter>
      ))}
    </span>
  );
}

export default letterAnimate;
