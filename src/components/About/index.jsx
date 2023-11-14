import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import letterAnimate from "../../utils/letterAnimate";

const StyledContainer = styled.div`
  margin-left: 100px;
  padding: 50px;
  color: white;
`;

const StyledTitle = styled.h2`
  font-size: 36px;
  letter-spacing: 3px;
  line-height: 50px;
`;

const StyledMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid white;
`;

const StyledText = styled.div`
  flex: 1;
  min-width: 300px;
`;

const paragraphAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  80% {
    opacity: 0.5;
    transform: scale(1.05);
  }
  90% {
    opacity: 1;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledParagraph = styled.p`
  margin: 20px 0;
  transform-origin: 50% 50%;
  animation: ${({ $animateIntro }) =>
    $animateIntro ? "" : css`0.5s ease-out 1s ${paragraphAnimation} both`};

  &:nth-of-type(2) {
    animation-delay: 1.5s;
  }

  &:nth-of-type(3) {
    animation-delay: 2s;
  }
`;

const StyledCubeContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1800px;
  min-height: 200px;
  border: 2px solid white;
`;

const spincube = keyframes`
  from {
    transform: rotateY(0deg) rotateX(0deg) ;
  }
  to {
    transform: rotateY(360deg) rotateX(360deg);
  }
`;

const StyledCube = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform-origin: 50% 50% -50px;
  border: 2px solid red;
  animation: ${({ $animateIntro }) =>
    $animateIntro ? "" : css`10s linear ${spincube} infinite`};
`;

const StyledCubeSide = styled.div`
  position: absolute;
  top: 0;
  width: 100px;
  height: 100px;
  opacity: 0.8;

  ${({ $color, $origin, $transform }) => `
    background-color: ${$color};
    transform-origin: ${$origin};
    transform: ${$transform};
  `}
`;

const about = "About me";

function About() {
  const [animateIntro, setAnimateIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setAnimateIntro(false), 3000);
  }, []);

  return (
    <StyledContainer>
      <StyledTitle>{letterAnimate(about, 0, animateIntro)}</StyledTitle>
      <StyledMain>
        <StyledText>
          <StyledParagraph>Me, me, me, me, me</StyledParagraph>
          <StyledParagraph>
            Goals, Goals, Goals, Goals, Goals, Goals, Goals, Goals, Goals,
            Goals, Goals, Goals, Goals, Goals, Goals, Goals, Goals, Goals,
            Goals, Goals
          </StyledParagraph>
          <StyledParagraph>
            Stack, Stack, Stack, Stack, Stack, Stack, Stack, Stack, Stack,
            Stack, Stack, Stack, Stack, Stack, Stack, Stack, Stack, Stack, Stack
          </StyledParagraph>
        </StyledText>
        <StyledCubeContainer>
          <StyledCube>
            <StyledCubeSide $color="green" />
            <StyledCubeSide
              $color="red"
              $origin="100%"
              $transform="rotateY(270deg)"
            />
            <StyledCubeSide
              $color="blue"
              $origin="0%"
              $transform="rotateY(90deg)"
            />
            <StyledCubeSide
              $color="yellow"
              $origin="50% 0%"
              $transform="rotateX(270deg)"
            />
            <StyledCubeSide
              $color="purple"
              $origin="50% 100%"
              $transform="rotateX(90deg)"
            />
            <StyledCubeSide $color="lime" $transform="translateZ(-100px)" />
          </StyledCube>
        </StyledCubeContainer>
      </StyledMain>
    </StyledContainer>
  );
}

export default About;
