import styled from "styled-components";
import gsap from "gsap-trial";
import { useEffect, useRef } from "react";

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10vw;
  z-index: -1;
  height: 100vh;
  width: 0vw;
  overflow: hidden;
  opacity: 0.8;
`;

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`;

function Background() {
  const svgRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      {
        width: 0,
      },
      {
        width: "90vw",
        delay: 2,
        duration: 2,
        ease: "expo.in",
      },
    );
  }, []);

  return (
    <StyledContainer ref={svgRef}>
      <StyledSvg
        id="svg1"
        width="90vw"
        height="140vh"
        version="1.1"
        viewBox="0 0 297 210"
      >
        <g id="layer1">
          <path
            id="path16"
            d="m11.729 97.268v7.0069l267.73-31.831v-50.849z"
            fill="#3372ab"
          />
          <path
            id="path17"
            d="m11.68 113.57v6.22l183.6 8.3486v-27.437z"
            fill="#33ab75"
          />
          <path
            id="path18"
            d="m11.93 131.06v5.7581l219.52 56.762v-41.492z"
            fill="#6e33ab"
          />
        </g>
      </StyledSvg>
    </StyledContainer>
  );
}

export default Background;
