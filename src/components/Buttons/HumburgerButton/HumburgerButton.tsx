import React from "react";
import classes from "./HumburgerButton.module.scss";
import { HumburgerMenuSvg } from "../../../assets/svg";

interface HumburgerButtonProps {
  toggleMenu: () => void;
  showMenu: boolean;
}

const HumburgerButton: React.FC<HumburgerButtonProps> = ({ toggleMenu }) => {
  return (
    <button className={classes.humburgerButton} onClick={toggleMenu}>
      <HumburgerMenuSvg />
    </button>
  );
};

export default HumburgerButton;
