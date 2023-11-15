import { useEffect, useState } from "react";
import styled from "styled-components";
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
`;

const contactMe = "Contact me";

function Contact() {
  const [animateIntro, setAnimateIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setAnimateIntro(false), 3000);
  }, []);

  return (
    <StyledContainer>
      <StyledTitle>{letterAnimate(contactMe, 0, animateIntro)}</StyledTitle>
      <StyledMain></StyledMain>
    </StyledContainer>
  );
}

export default Contact;
