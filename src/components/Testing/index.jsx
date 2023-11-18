import { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";

const StyledContainer = styled.div`
  margin-left: 100px;
  min-height: 200vh;
  padding: 50px;
  color: white;
`;

const StyledScrollLine = styled.div`
  height: 90vh;
  width: 3px;
  border-radius: 3px;
  background-color: rgba(100, 200, 100, 0.2);
  position: fixed;
  top: 5vh;
  left: 105px;
`;

const StyledAdvance = styled.div`
  position: fixed;
  top: 5vh;
  left: 105px;
  height: 90vh;
  width: 3px;
  border-radius: 3px;
  background-color: rgba(100, 200, 100, 1);
  transform-origin: 0% 0%;
  transform: scaleY(0);
`;

const pulse = keyframes`
  from {
    box-shadow: none;
  }
  to {
    box-shadow:
    2px 2px 5px 0 rgb(200, 50, 200),
    -2px -2px 5px 0 rgb(200, 50, 200),
    2px -2px 5px 0 rgb(200, 50, 200),
    -2px 2px 5px 0 rgb(200, 50, 200);
  }
`;

const StyledDot = styled.div`
  position: fixed;
  top: 5vh;
  left: 103px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #bf19c2;
  box-shadow:
    2px 2px 5px 0 rgb(200, 50, 200),
    -2px -2px 5px 0 rgb(200, 50, 200),
    2px -2px 5px 0 rgb(200, 50, 200),
    -2px 2px 5px 0 rgb(200, 50, 200);
  transform: translateY(0);
  animation: ${() => css`0.8s ${pulse} infinite alternate`};
`;

function Testing() {
  const containerRef = useRef();
  const advanceRef = useRef();
  const dotRef = useRef();

  useEffect(() => {
    const containerHeight = containerRef.current.getBoundingClientRect().height;
    const viewportHeight = window.innerHeight;

    function handlePosition() {
      advanceRef.current.style.transform = `scaleY(${
        window.scrollY / (containerHeight - viewportHeight)
      })`;
      dotRef.current.style.transform = `translateY(${
        (window.scrollY / (containerHeight - viewportHeight)) *
        viewportHeight *
        0.9
      }px)`;
    }

    document.addEventListener("scroll", handlePosition);

    return () => document.removeEventListener("scroll", handlePosition);
  }, []);

  return (
    <StyledContainer ref={containerRef}>
      HAI
      <StyledScrollLine />
      <StyledAdvance ref={advanceRef} />
      <StyledDot ref={dotRef} />
    </StyledContainer>
  );
}

export default Testing;
