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
  max-width: 700px;
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

const StyledForm = styled.form``;

const StyledInputs = styled.div`
  display: grid;
  grid-template-areas:
    "name email"
    "subject subject"
    "message message"
    "message message"
    "message message"
    "message message";
  grid-template-rows: repeat(6, 30px);
  gap: 10px;

  & > * {
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    max-width: 100%;
    animation: ${() => css`0.5s ease-out 1.5s ${paragraphAnimation} both`};

    &:nth-of-type(2) {
      animation-delay: 1.3s;
    }

    &:nth-of-type(3) {
      animation-delay: 1.6s;
    }
  }

  & > #message {
    animation-delay: 1.9s;
  }

  @media only screen and (max-width: 500px) {
    grid-template-areas:
      "name"
      "email"
      "subject"
      "message"
      "message"
      "message"
      "message";
    grid-template-rows: repeat(7, 30px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

const buttonRoll = keyframes`
  from {
    background-position: -200px 0px;
  }
  to {
    background-position: 0px 0px;
  }
`;

const StyledContact = styled.input`
  text-transform: uppercase;
  color: gold;
  background-image: linear-gradient(45deg, #6b0080 46%, white 48%, #6b0080 50%);
  background-repeat: no-repeat;
  background-size: 300% 100%;
  border: none;
  width: 120px;
  height: 30px;
  margin: 10px 0;
  float: right;
  border-radius: 3px;
  cursor: pointer;
  animation: ${() => css`1.5s ${fadeIn} 2s both`};
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

const contactMe = "Contact me";

function Contact() {
  const [animateIntro, setAnimateIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setAnimateIntro(false), 3000);
  }, []);

  function handleEmail(e) {
    e.preventDefault();
    console.log("EMAIL:", e.target.name.value);
  }

  return (
    <StyledContainer>
      <StyledTitle>{letterAnimate(contactMe, 0, animateIntro)}</StyledTitle>
      <StyledMain>
        <StyledText>
          <StyledParagraph>Contact me, me, me, me, me</StyledParagraph>
          <StyledForm onSubmit={handleEmail}>
            <StyledInputs>
              <input
                style={{ gridArea: "name" }}
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                autoComplete="off"
              />
              <input
                style={{ gridArea: "email" }}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                autoComplete="off"
              />
              <input
                style={{ gridArea: "subject" }}
                type="text"
                placeholder="Subject"
                id="subject"
                name="subject"
              />
              <textarea
                style={{
                  gridArea: "message",
                  resize: "none",
                }}
                placeholder="Message"
                id="message"
                name="message"
              />
            </StyledInputs>
            <StyledContact type="submit" />
          </StyledForm>
        </StyledText>
      </StyledMain>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2832.378691810725!2d17.18948202015694!3d44.77308444143213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sba!4v1700247593653!5m2!1sen!2sba"
        width="100%"
        height="450"
        style={{ border: 0, maxWidth: "700px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </StyledContainer>
  );
}

export default Contact;
