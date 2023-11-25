import styled, { css, keyframes } from "styled-components";
import typeText from "../../../utils/consoleTyping";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  margin-left: 100px;
  background-color: #1f1d1d;
  min-height: 100vh;
  position: relative;
`;

const flicker = keyframes`
0% {
    opacity: 0;
  }
100% {
    opacity: 0.5;
  }
`;

const shadow = keyframes`
  0% {
    text-shadow: 0px 0 2px rgba(0, 255, 0.5), -0px 0 2px rgba(0, 255, 0.5);
  }
  33% {
    text-shadow: 0.2px 0 2px rgba(0, 255, 0.5), 0.2px 0 2px rgba(0, 255, 0.5);
  }
  66% {
    text-shadow: 0.5px 0 2px rgba(0, 255, 0.5), -0.5px 0 2px rgba(0, 255, 0.5);
  }
  100% {
    text-shadow: 0.1px 0 2px rgba(0, 255, 0.5), -0.1px 0 2px rgba(0, 255, 0.5);
  }
  `;

const LettersContainer = styled.div`
  color: lime;
  width: 100%;
  transition: all 1s;
  animation: ${() => css`
      0.15s ${shadow} infinite
    `};

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        rgba(20, 20, 20, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.04),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.04)
      );
    background-size:
      100% 4px,
      4px 100%;
    animation: ${() => css`
      0.15s ${flicker} infinite
    `};
  }
`;

const Letter = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const blink = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const PromptContainer = styled.div``;

const PromptInput = styled.span``;

const Underline = styled.span`
  opacity: 0;
  animation: ${() => css`
      0.3s ${blink} alternate infinite
    `};
`;

function ConsoleStyle() {
  const promptRef = useRef();
  const parentRef = useRef();
  const [command, setCommand] = useState("");
  const [entered, setEntered] = useState(false);

  const letters = typeText("Proba, proba");

  function checkInput(input) {
    switch (input) {
      case "foo":
        return "bar";
      default:
        return false;
    }
  }

  useEffect(() => {
    function handleTyping(e) {
      if (e.keyCode === 13) {
        return setEntered(true);
      }

      if (e.keyCode === 8) {
        return setCommand((p) => p.slice(0, p.length - 1));
      }

      if (e.keyCode < 48) {
        return;
      } else if (e.keyCode > 57 && e.keyCode < 65) {
        return;
      } else if (e.keyCode > 90) {
        return;
      }

      setCommand((p) => p + e.key);
    }

    document.addEventListener("keydown", handleTyping);

    return () => document.removeEventListener("keydown", handleTyping);
  }, []);

  useEffect(() => {
    if (entered) {
      if (checkInput(command)) {
        const element = document.createElement("p");
        element.textContent = command;
        parentRef.current.insertBefore(element, promptRef.current);
      } else {
        const element = document.createElement("p");
        element.textContent = "Wrong command";
        parentRef.current.insertBefore(element, promptRef.current);
      }
      setCommand("");
      setEntered(false);
    }
  }, [entered]);

  return (
    <Container>
      <LettersContainer ref={parentRef}>
        {letters.map((l, i) => (
          <Letter key={i}>{l}</Letter>
        ))}
        <PromptContainer ref={promptRef}>
          <span>{"> "}</span>
          <PromptInput>{command}</PromptInput>
          <Underline>_</Underline>
        </PromptContainer>
      </LettersContainer>
    </Container>
  );
}

export default ConsoleStyle;
