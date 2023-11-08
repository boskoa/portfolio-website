import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  padding: 10px;
  gap: 30px;
  bottom: 0;
  width: 100px;
  background-color: black;
`;

const StyledNav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 26px;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Link to="/">
        <img src="vite.svg" />
      </Link>
      <StyledNav>
        <StyledNavLink to="/" exact="true" activeclassname="active">
          <FontAwesomeIcon icon={faHome} color="inherit" />
        </StyledNavLink>
        <StyledNavLink to="/about" exact="true" activeclassname="active">
          <FontAwesomeIcon icon={faUser} color="grey" />
        </StyledNavLink>
        <StyledNavLink to="/contact" exact="true" activeclassname="active">
          <FontAwesomeIcon icon={faEnvelope} color="grey" />
        </StyledNavLink>
      </StyledNav>
    </StyledSidebar>
  );
}

export default Sidebar;
