import { useEffect, useRef } from "react";
import styled from "styled-components";

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
  border: 2px solid white;
  border-radius: 30px;
  transition: all 0.2s;
`;

const MenuIcon = styled.div`
  width: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ $bg }) => $bg};
  transition: all 0.4s;
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
        ref.current.style.width = "80px";
        if (ref.current.previousSibling) {
          ref.current.previousSibling.style.width = "60px";
        }
        if (ref.current.nextSibling) {
          ref.current.nextSibling.style.width = "60px";
        }
        //ref.current.parentElement.style.width = "400px";
      });
    }

    function iconLeave(ref) {
      ref.current.addEventListener("mouseleave", function () {
        ref.current.style.width = "40px";
        if (ref.current.previousSibling) {
          ref.current.previousSibling.style.width = "40px";
        }
        if (ref.current.nextSibling) {
          ref.current.nextSibling.style.width = "40px";
        }
        //ref.current.parentElement.style.width = "300px";
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
        <MenuIcon ref={firstRef} $bg="lime" />
        <MenuIcon ref={secondRef} $bg="purple" />
        <MenuIcon ref={thirdRef} $bg="pink" />
        <MenuIcon ref={fourthRef} $bg="gold" />
        <MenuIcon ref={fifthRef} $bg="teal" />
      </IconsContainer>
    </StyledContainer>
  );
}

export default Menu;
