import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px 10px;
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
  width: 100%;
  text-align: center;

  &:hover > svg {
    opacity: 0;
    transition: all 0.3s;
  }

  &:after {
    content: "";
    color: gold;
    opacity: 0;
    transition: 0.3s all 0.1s;
    font-size: 16px;
    display: block;
    position: absolute;
    width: 100%;
    top: 5px;
    text-align: center;
  }

  &:hover:after {
    content: "${({ text }) => text}";
    opacity: 1;
  }
`;

const StyledSocial = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  list-style: none;
`;

const StyledSocialItem = styled.li`
  & svg:hover {
    color: ${({ $hovered }) => $hovered};
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
      <StyledSocial>
        <StyledSocialItem $hovered="limegreen">
          <a target="_blank" rel="noreferrer" href="https://github.com/boskoa">
            <FontAwesomeIcon icon={faGithub} color="grey" />
          </a>
        </StyledSocialItem>
        <StyledSocialItem $hovered="#0072B1">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bo%C5%A1ko-ani%C4%8Di%C4%87-046583246/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="grey" />
          </a>
        </StyledSocialItem>
        <StyledSocialItem $hovered="red">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCti93pLmLwgcZ-65e5Zy1Dg"
          >
            <FontAwesomeIcon icon={faYoutube} color="grey" />
          </a>
        </StyledSocialItem>
      </StyledSocial>
    </StyledSidebar>
  );
}

export default Sidebar;
