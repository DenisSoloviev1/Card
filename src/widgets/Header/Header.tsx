import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Tooltip from "../../components/Tooltip/Tooltip.tsx";
import HumburgerButton from "../../components/Buttons/HumburgerButton/HumburgerButton.tsx";
import Menu from "../Menu/Menu.tsx";
import { IntroSvg } from "../../assets/svg.tsx";
import { AboutMeSvg } from "../../assets/svg.tsx";
import { SkillsSvg } from "../../assets/svg.tsx";
import { PortfolioSvg } from "../../assets/svg.tsx";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header>
      <HumburgerButton showMenu={showMenu} toggleMenu={toggleMenu} />
      <Menu show={showMenu} handleClose={toggleMenu} />
      <nav>
        <Tooltip text={"главная"} to={"/"}>
          <NavLink to="/">
            <IntroSvg />
          </NavLink>
        </Tooltip>

        <Tooltip text={"обо мне"} to={"/aboutMe"}>
          <NavLink to="/aboutMe">
            <AboutMeSvg />
          </NavLink>
        </Tooltip>

        <Tooltip text={"навыки"} to={"/skills"}>
          <NavLink to="/skills">
            <SkillsSvg />
          </NavLink>
        </Tooltip>

        <Tooltip text={"портфолио"} to={"/portfolio"}>
          <NavLink to="/portfolio">
            <PortfolioSvg />
          </NavLink>
        </Tooltip>
      </nav>
    </header>
  );
};

export default Header;
