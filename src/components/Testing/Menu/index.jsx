import { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  faEnvelope,
  faHome,
  faUser,
  faAtom,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledContainer = styled.div`
  position: fixed;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 10px;
  border-radius: 30px;
  transition: all 0.2s;
`;

const IconContainer = styled.div`
  transition: all 0.1s;
  &:active {
    transform: scale(0.95);
  }
`;

const wave = keyframes`
  from {
    opacity: 0.8;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.2);
  }
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  box-shadow: inset 0 0 30px 0 rgba(50, 50, 50, 0.7);
  background-color: ${({ $bg }) => $bg};
  transform-style: preserve-3d;
  transition:
    all 0.4s,
    0.8s transform 1s;
  cursor: pointer;

  &:active::after {
    content: "";
    position: absolute;
    top: 0;
    width: 94%;
    height: 94%;
    border-radius: 50%;
    border: 3px solid ${({ $bg }) => $bg};
    animation: ${() => css`0.2s ${wave} forwards`};
  }
`;

const Description = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg) translateZ(20px);
  transform-origin: 50%;
  font-size: 50%;
  font-weight: 800;
  user-select: none;
`;

function Menu() {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();

  useEffect(() => {
    const iconsArray = [firstRef, secondRef, thirdRef, fourthRef, fifthRef];

    function iconEnter(ref) {
      ref.current.addEventListener("mouseenter", function () {
        ref.current.firstChild.style =
          "width: 80px; font-size: 36px; transform: rotateY(180deg);";
        if (ref.current.previousSibling) {
          ref.current.previousSibling.firstChild.style =
            "width: 60px; font-size: 28px; transition-delay: 0s;";
        }
        if (ref.current.nextSibling) {
          ref.current.nextSibling.firstChild.style =
            "width: 60px; font-size: 28px; transition-delay: 0s;";
        }
      });
    }

    function iconLeave(ref) {
      ref.current.addEventListener("mouseleave", function () {
        ref.current.firstChild.style =
          "width: 40px; font-size: 20px; transform: rotateY(0deg); transition-delay: 0s;";
        if (ref.current.previousSibling) {
          ref.current.previousSibling.firstChild.style =
            "width: 40px; font-size: 20px;";
        }
        if (ref.current.nextSibling) {
          ref.current.nextSibling.firstChild.style =
            "width: 40px; font-size: 20px;";
        }
      });
    }

    iconsArray.forEach((i) => {
      iconEnter(i);
      iconLeave(i);
    });
  }, []);

  return (
    <StyledContainer>
      <IconsContainer>
        <IconContainer ref={firstRef}>
          <MenuIcon $bg="lime">
            <FontAwesomeIcon
              icon={faHome}
              style={{ transform: "translateZ(20px)" }}
            />
            <Description>Home</Description>
          </MenuIcon>
        </IconContainer>
        <IconContainer ref={secondRef}>
          <MenuIcon $bg="purple">
            <FontAwesomeIcon
              icon={faUser}
              style={{ transform: "translateZ(20px)" }}
            />
            <Description>About</Description>
          </MenuIcon>
        </IconContainer>
        <IconContainer ref={thirdRef}>
          <MenuIcon $bg="pink">
            {" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ transform: "translateZ(20px)" }}
            />
            <Description>Contact</Description>
          </MenuIcon>
        </IconContainer>
        <IconContainer ref={fourthRef}>
          <MenuIcon $bg="gold">
            {" "}
            <FontAwesomeIcon
              icon={faAtom}
              style={{ transform: "translateZ(20px)" }}
            />
            <Description>React</Description>
          </MenuIcon>
        </IconContainer>
        <IconContainer ref={fifthRef}>
          <MenuIcon $bg="teal">
            {" "}
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ transform: "translateZ(20px)" }}
            />
            <Description>Calendar</Description>
          </MenuIcon>
        </IconContainer>
      </IconsContainer>
    </StyledContainer>
  );
}

export default Menu;
