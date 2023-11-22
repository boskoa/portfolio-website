import { useEffect, useRef } from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  width: 300px;
  height: 200px;
  transition: all 0.2s;
  transform-origin: center;
  transform-style: preserve-3d;
  position: relative;
  padding: 20px;
  perspective: 1000px;

  &:hover > div {
    transform: scale(0.83);
  }

  &:hover > img {
    transform: translateZ(30px);
  }
`;

const Shadow = styled.div`
  width: 300px;
  height: 160px;
  position: absolute;
  top: 20px;
  left: 0px;
  box-shadow:
    10px 10px 40px 0 black,
    -10px -10px 40px 0 black,
    -10px 10px 40px 0 black,
    10px -10px 40px 0 black;
  transform: scale(0.6);
  transition: all 0.3s;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform: translateZ(5px);
  transition: all 0.3s;
`;

function Project() {
  const boardRef = useRef();

  useEffect(() => {
    const element = boardRef.current;
    function hoverBoard(e) {
      const rect = element.getBoundingClientRect();
      const x = -(rect.width / 2) + e.clientX - rect.left;
      const y = -(rect.height / 2) + e.clientY - rect.top;
      const rotateY = parseInt(-(x / rect.width) * 30);
      const rotateX = parseInt((y / rect.height) * 30);

      element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function hoverExit() {
      element.style.transform = "rotateX(0deg) rotateY(0deg)";
    }

    boardRef.current.addEventListener("mousemove", hoverBoard);
    boardRef.current.addEventListener("mouseleave", hoverExit);

    return () => {
      element.removeEventListener("mousemove", hoverBoard);
      element.removeEventListener("mouseleave", hoverExit);
    };
  }, []);

  return (
    <ProjectContainer ref={boardRef}>
      <Shadow />
      <Image
        src="https://picsum.photos/id/237/200/300"
        className="image-board"
      />
    </ProjectContainer>
  );
}

export default Project;
