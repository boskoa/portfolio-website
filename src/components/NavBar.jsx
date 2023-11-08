import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function NavBar() {
  return (
    <StyledHeader>
      <NavLink
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "",
        })}
        to="/test"
      >
        BAI
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "",
        })}
        to="/test2"
      >
        MARK
      </NavLink>
    </StyledHeader>
  );
}

export default NavBar;
