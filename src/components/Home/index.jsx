import styled from "styled-components";
import letterAnimate from "../../utils/letterAnimate";

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

const StyledSub = styled.p`
  color: grey;
  margin: 20px 0;
`;

const StyledContact = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid gold;
  color: gold;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px 0 gold;
  }

  &:active {
    transform: none;
    box-shadow: none;
  }

  @media (hover: none) {
    cursor: default;
  }
`;

const greeting = "Hello,";

function Home() {
  return (
    <StyledContainer>
      <StyledHeader>
        {letterAnimate(greeting, 0)}
        <br />
        I&apos;m Boško
      </StyledHeader>
      <StyledSub>Full stack developer</StyledSub>
      <StyledContact>Contact me</StyledContact>
    </StyledContainer>
  );
}

export default Home;
