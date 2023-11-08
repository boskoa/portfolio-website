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
  width: 100%;
  gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 26px;
  position: relative;

  &:hover > svg {
    opacity: 0;
    transition: all 0.3s;
  }

  &:after {
    content: "";
    color: white;
    opacity: 0;
    transition: 0.3s all 0.1s;
    font-size: 16px;
    display: block;
    position: absolute;
    width: 100%;
    top: 5px;
    left: -20%;
  }

  &:hover:after {
    content: "${({ text }) => text}";
    opacity: 1;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Link to="/">
        <img src="vite.svg" />
      </Link>
      <StyledNav>
        <StyledNavLink to="/" exact="true" activeclassname="active" text="Home">
          <FontAwesomeIcon icon={faHome} color="inherit" />
        </StyledNavLink>
        <StyledNavLink
          to="/about"
          exact="true"
          activeclassname="active"
          text="About"
        >
          <FontAwesomeIcon icon={faUser} color="grey" />
        </StyledNavLink>
        <StyledNavLink
          to="/contact"
          exact="true"
          activeclassname="active"
          text="Contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="grey" />
        </StyledNavLink>
      </StyledNav>
    </StyledSidebar>
  );
}

export default Sidebar;
