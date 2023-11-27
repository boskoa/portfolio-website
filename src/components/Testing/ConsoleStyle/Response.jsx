import { memo, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Container = styled.p`
  & > * {
    font-family: "IBM Plex Mono", monospace;
  }
`;

const typing = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Letter = styled.span`
  opacity: ${({ $animate }) => ($animate ? 0 : 1)};
  font-family: "IBM Plex Mono", monospace;
  font-size: 14px;
  font-weight: ${({ $animate }) => ($animate ? 500 : 600)};
  white-space: pre;
  animation: ${({ $delay, $animate }) =>
    $animate
      ? css`
      10ms ${typing} ${$delay} forwards
    `
      : ""};
`;

function Response({ delay, r, promptRef }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const index = setTimeout(() => setShow(true), delay);

    return () => clearTimeout(index);
  }, [delay]);

  useEffect(() => {
    if (show) {
      promptRef.scrollIntoView(true);
    }
  }, [show, promptRef]);

  if (!show) return null;

  return (
    <Container r={r}>
      {r.text.split("").map((l, i) => {
        return (
          <Letter
            $animate={r.variant === "response"}
            $delay={`${i * 10}ms`}
            key={i}
          >
            {l}
          </Letter>
        );
      })}
    </Container>
  );
}

const MemoizedResponse = memo(Response);

export default MemoizedResponse;
