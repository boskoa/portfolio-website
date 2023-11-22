import styled from "styled-components";
import Project from "./Project";

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  align-content: start;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
  min-height: 100vh;
  margin-left: 100px;
`;

function ProjectsBoard() {
  return (
    <ProjectsContainer>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </ProjectsContainer>
  );
}

export default ProjectsBoard;
