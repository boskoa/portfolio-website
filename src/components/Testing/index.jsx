import { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import Menu from "./Menu";
import GradientBox from "./GradientBox";

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
    2px 2px 5px 0 rgb(250, 50, 250),
    -2px -2px 5px 0 rgb(250, 50, 250),
    2px -2px 5px 0 rgb(250, 50, 250),
    -2px 2px 5px 0 rgb(250, 50, 250);
  }
`;

const StyledDot = styled.div`
  position: fixed;
  top: 5vh;
  left: 103px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(250, 50, 250);
  transform: translateY(0);
  animation: ${() => css`0.8s ${pulse} infinite alternate`};
`;

const rotateCirc = keyframes`
  from {
    transform: rotateZ(180deg);
  }
  to {
    transform: rotateZ(0deg);
  }
`;

const rotateCircContra = keyframes`
  from {
    transform: rotateZ(-180deg);
  }
  to {
    transform: rotateZ(0deg);
  }
`;

const rotateMask = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(180deg);
  }
`;

const rotateMaskContra = keyframes`
  from {
    transform: rotateZ(180deg);
  }
  to {
    transform: rotateZ(0deg);
  }
`;

const StyledCircle = styled.div`
  position: relative;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: ${({ $zIndex }) => $zIndex};
`;

const StyledMask = styled.div`
  position: relative;
  top: 0;
  height: 100px;
  width: 48px;
  border-radius: 100px 0 0 100px;
  background-color: transparent;
  transform-origin: 50px 50px;
  transform: ${({ $direction }) =>
    $direction ? "rotateZ(0deg)" : "rotateZ(180deg)"};
  overflow: hidden;
  animation: ${({ $direction, $delay }) =>
    $direction
      ? css`1s ${rotateMask} ${$delay} linear forwards`
      : css`1s ${rotateMaskContra} ${$delay} linear forwards`};
`;

const StyledBorderCirc = styled.div`
  position: relative;
  top: 0;
  height: 100px;
  width: 50px;
  border-radius: 100px 0 0 100px;
  transform-origin: 50px 50px;
  transform: ${({ $direction }) =>
    !$direction ? "rotateZ(180deg)" : "rotateZ(-180deg)"};
  background: ${({ $background }) => $background};
  animation: ${({ $direction, $delay }) =>
    $direction
      ? css`1s ${rotateCirc} ${$delay} linear forwards`
      : css`1s ${rotateCircContra} ${$delay} linear forwards`};
`;

const rippling = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.4);
  }
  100% {
    opacity: 0;
    transform: scale(1.8);
  }
`;

const StyledIconContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: rgb(2, 34, 69);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover .ripple {
    animation: ${() => css`1s ${rippling} linear infinite`};
  }
`;

const StyledIcon = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: lime;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  user-select: none;

  &:active {
    transform: scale(0.9);
  }
`;

const StyledRipple = styled.div`
  position: absolute;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 2px solid rgba(100, 255, 100, 0.7);
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
      <Menu />
      <div style={{ marginTop: 100 }}>
        <StyledCircle $top="0" $zIndex={5}>
          <StyledMask $direction={true}>
            <StyledBorderCirc
              $direction={true}
              $background="linear-gradient(yellow 10%, green)"
            />
          </StyledMask>
          <StyledIconContainer>
            <StyledRipple className="ripple" />
            <StyledIcon>A</StyledIcon>
          </StyledIconContainer>
        </StyledCircle>
        <StyledCircle $top="-10px" $left="6px" $zIndex={4}>
          <StyledMask $direction={false} $delay="0.98s">
            <StyledBorderCirc
              $direction={false}
              $background="linear-gradient(yellow 10%, green 90%)"
              $delay="0.98s"
            />
          </StyledMask>
          <StyledIconContainer>
            <StyledRipple className="ripple" />
            <StyledIcon>B</StyledIcon>
          </StyledIconContainer>
        </StyledCircle>
        <StyledCircle $top="-20px" $zIndex={3}>
          <StyledMask $direction={true} $delay="1.96s">
            <StyledBorderCirc
              $direction={true}
              $background="linear-gradient(yellow, green 90%)"
              $delay="1.96s"
            />
          </StyledMask>
          <StyledIconContainer>
            <StyledRipple className="ripple" />
            <StyledIcon>C</StyledIcon>
          </StyledIconContainer>
        </StyledCircle>
        <StyledCircle $top="-30px" $left="6px" $zIndex={3}>
          <StyledMask $direction={false} $delay="2.94s">
            <StyledBorderCirc
              $direction={false}
              $background="linear-gradient(yellow, purple 90%)"
              $delay="2.94s"
            />
          </StyledMask>
          <StyledIconContainer>
            <StyledRipple className="ripple" />
            <StyledIcon>D</StyledIcon>
          </StyledIconContainer>
        </StyledCircle>
      </div>
      <GradientBox />
      <StyledScrollLine />
      <StyledAdvance ref={advanceRef} />
      <StyledDot ref={dotRef} />
    </StyledContainer>
  );
}

export default Testing;
