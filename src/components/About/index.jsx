import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import letterAnimate from "../../utils/letterAnimate";
import ReactLogo from "../../assets/react.svg";
import PostgresLogo from "../../assets/postgres.svg";
import HtmlLogo from "../../assets/html.svg";
import CssLogo from "../../assets/css.svg";
import JsLogo from "../../assets/js.svg";
import NodeLogo from "../../assets/nodejs.svg";

const StyledContainer = styled.div`
  margin-left: 100px;
  min-height: 100vh;
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
`;

const StyledText = styled.div`
  flex: 1;
  min-width: 200px;
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
`;

const spincube = keyframes`
  from {
    transform: rotateY(0deg) rotateX(0deg) ;
  }
  to {
    transform: rotateY(360deg) rotateX(720deg);
  }
`;

const StyledCube = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  transform-style: preserve-3d;
  transform-origin: 50% 50% -75px;
  animation: ${({ $animateIntro }) =>
    $animateIntro ? "" : css`20s linear ${spincube} infinite`};
`;

const StyledCubeSide = styled.div`
  position: absolute;
  top: 0;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(50, 205, 50, 0.1);
  box-shadow: 0 0 5px 0 lime;

  ${({ $origin, $transform }) => `
    transform-origin: ${$origin};
    transform: ${$transform};
  `}
`;

const StyledLogo = styled.img`
  width: 50%;
  height: 50%;
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
            <StyledCubeSide>
              <StyledLogo src={NodeLogo} />
            </StyledCubeSide>
            <StyledCubeSide $origin="100%" $transform="rotateY(270deg)">
              <StyledLogo src={ReactLogo} />
            </StyledCubeSide>
            <StyledCubeSide $origin="0%" $transform="rotateY(90deg)">
              <StyledLogo src={PostgresLogo} />
            </StyledCubeSide>
            <StyledCubeSide $origin="50% 0%" $transform="rotateX(270deg)">
              <StyledLogo src={HtmlLogo} />
            </StyledCubeSide>
            <StyledCubeSide
              $origin="50% 100%"
              $transform="rotateX(90deg) rotateY(180deg)"
            >
              <StyledLogo src={CssLogo} />
            </StyledCubeSide>
            <StyledCubeSide $transform="translateZ(-150px) rotateY(180deg)">
              <StyledLogo src={JsLogo} />
            </StyledCubeSide>
          </StyledCube>
        </StyledCubeContainer>
      </StyledMain>
    </StyledContainer>
  );
}

export default About;
