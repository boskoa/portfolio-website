import styled, { css, keyframes } from "styled-components";
import letterAnimate from "../../utils/letterAnimate";
import { useEffect, useState } from "react";

const StyledContainer = styled.div`
  margin-left: 100px;
  padding: 50px;
  color: white;
`;

const StyledHeader = styled.h2`
  font-size: 36px;
  letter-spacing: 3px;
  line-height: 50px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

const StyledSub = styled.p`
  color: grey;
  margin: 20px 0;
  animation: ${() => css`1.5s ${fadeIn} 0.5s both`};
`;

const buttonRoll = keyframes`
  from {
    background-position: -200px 0px;
  }
  to {
    background-position: 0px 0px;
  }
`;

const StyledContact = styled.button`
  text-transform: uppercase;
  color: gold;
  background-image: linear-gradient(45deg, #6b0080 46%, white 48%, #6b0080 50%);
  background-repeat: no-repeat;
  background-size: 300% 100%;
  border: none;
  width: 120px;
  border-radius: 3px;
  cursor: pointer;
  animation: ${() => css`1.5s ${fadeIn} 0.5s both`};
  transition: all 0.2s;

  &:hover {
    animation: ${() => css`
        ${buttonRoll} 1s ease-out 0s forwards
      `},
      ${() => css`1.5s ${fadeIn} 0.5s both`};
  }

  &:active {
    transform: scale(0.99);
  }

  @media (hover: none) {
    cursor: default;
  }
`;

const StyledContactText = styled.div`
  background-color: black;
  padding: 10px;
  margin: 3px;
  border-radius: 3px;
`;

const greeting = "Hello,";
const intro = "I'm Boško";

function Home() {
  const [animateIntro, setAnimateIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setAnimateIntro(false), 3000);
  }, []);

  return (
    <StyledContainer>
      <StyledHeader>
        {letterAnimate(greeting, 0, animateIntro)}
        <br />
        {letterAnimate(intro, greeting.length, animateIntro)}
      </StyledHeader>
      <StyledSub>Full stack developer</StyledSub>
      <StyledContact>
        <StyledContactText>Contact me</StyledContactText>
      </StyledContact>
    </StyledContainer>
  );
}

export default Home;
