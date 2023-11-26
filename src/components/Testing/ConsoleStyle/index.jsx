/* eslint-disable indent */
import styled, { css, keyframes } from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import Response from "./Response";

const Container = styled.div`
  margin-left: 100px;
  background-color: #1f1d1d;
  min-height: 100vh;
  position: relative;
  font-family: "IBM Plex Mono", monospace;
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
  font-weight: 600;
  font-size: 14px;
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

const Responses = styled.div``;

const PromptContainer = styled.form`
  position: relative;

  & > * {
    font-family: "IBM Plex Mono", monospace;
  }
`;

const PromptInput = styled.input`
  position: absolute;
  bottom: 0;
  background-color: transparent;
  border: none;
  color: inherit;
  font-weight: 600;
  font-size: 14px;
  z-index: -100;
`;

const blink = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Underline = styled.label`
  position: relative;
  left: ${({ $left }) => $left}ch;
  font-weight: 600;
  font-size: 14px;
  opacity: 0;
  animation: ${() => css`
      0.3s ${blink} alternate infinite
    `};

  &::after {
    content: "";
    width: calc(100vw - 100px);
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 100px;
  }
`;

function ConsoleStyle() {
  const promptRef = useRef();
  const parentRef = useRef();
  const inputRef = useRef();
  const [command, setCommand] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [previousCommands, setPreviousCommands] = useState([""]);
  const [responses, setResponses] = useState([]);
  const [cursor, setCursor] = useState(0);

  const handleCommand = useCallback(function (e) {
    e.preventDefault();
    const command = e.target.command.value;
    let response = "";

    if (command === "foo") {
      response = [{ variant: "response", text: "HAI", delay: 100 }];
    } else if (command === "education") {
      response = [
        {
          variant: "response",
          text: "Elementary school: some school",
          delay: 100,
        },
        {
          variant: "response",
          text: "High school: some high school",
          delay: 1000,
        },
        {
          variant: "response",
          text: "University: some university",
          delay: 1870,
        },
      ];
    } else {
      response = [{ variant: "response", text: "Wrong command", delay: 100 }];
    }

    e.target.command.value = "";
    setResponses((p) => [
      ...p,
      { variant: "command", text: command },
      ...response,
    ]);
    setPreviousCommands((p) => ["", command, ...p.slice(1)]);
    setCommandIndex(0);
    setCommand("");
    setCursor(0);
  }, []);

  useEffect(() => {
    if (commandIndex > 0) {
      inputRef.current.value = previousCommands[commandIndex];
      setCommand(previousCommands[commandIndex]);
    } else {
      setCommand("");
      inputRef.current.value = "";
    }

    setTimeout(() => inputRef.current.setSelectionRange(100, 100));
  }, [previousCommands, commandIndex]);

  return (
    <Container>
      <LettersContainer ref={parentRef}>
        <Responses>
          {responses.map((r, i) => {
            return (
              <Response
                promptRef={promptRef.current}
                r={r}
                delay={r.delay}
                key={i}
              />
            );
          })}
        </Responses>
        <PromptContainer
          id="command-form"
          ref={promptRef}
          onSubmit={handleCommand}
        >
          <span>
            {"> "}
            {command}
          </span>
          <PromptInput
            ref={inputRef}
            id="command"
            name="command"
            autoFocus
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            onChange={(e) => {
              setCommand(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                setCommandIndex((p) =>
                  p === previousCommands.length - 1
                    ? previousCommands.length - 1
                    : p + 1,
                );
              } else if (e.key === "ArrowDown") {
                setCommandIndex((p) => (p === 0 ? 0 : p - 1));
              } else if (e.key === "ArrowLeft") {
                setCursor((p) => (e.target.value.length + p <= 0 ? p : p - 1));
              } else if (e.key === "ArrowRight") {
                setCursor((p) => (p === 0 ? 0 : p + 1));
              }
            }}
          />
          <Underline htmlFor="command" $left={cursor}>
            _
          </Underline>
          <input type="submit" hidden />
        </PromptContainer>
      </LettersContainer>
    </Container>
  );
}

export default ConsoleStyle;
