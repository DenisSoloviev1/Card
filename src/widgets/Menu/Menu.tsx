import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Menu.module.scss";
import { CloseSvg } from "../../assets/svg";
import { IntroSvg } from "../../assets/svg.tsx";
import { AboutMeSvg } from "../../assets/svg.tsx";
import { SkillsSvg } from "../../assets/svg.tsx";
import { PortfolioSvg } from "../../assets/svg.tsx";

interface MenuProps {
  show: boolean;
  handleClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ show, handleClose }) => {
  return (
    <div className={`${classes.menu} ${show ? classes.show : ""}`}>
      <title>
        <h2>Denis</h2>
        <button onClick={handleClose}>
          <CloseSvg />
        </button>
      </title>

      <ul>
        <li>
          <NavLink to="/" onClick={handleClose}>
            <IntroSvg />
            главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutMe" onClick={handleClose}>
            <AboutMeSvg />
            обо мне
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={handleClose}>
            <SkillsSvg />
            навыки
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" onClick={handleClose}>
            <PortfolioSvg />
            портфолио
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
