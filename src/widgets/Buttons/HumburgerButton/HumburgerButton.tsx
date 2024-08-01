import React from "react";
import "./HumburgerButton.scss";

interface HumburgerButtonProps {
  toggleMenu: () => void;
  showMenu: boolean;
}

const HumburgerButton: React.FC<HumburgerButtonProps> = ({ toggleMenu }) => {
  return (
    <button onClick={toggleMenu} className="humburgerButton">
      <svg viewBox="0 0 384 384">
        <g>
          <g>
            <g>
              <rect x="0" y="277.333" width="384" height="42.667" />
              <rect x="0" y="170.667" width="384" height="42.667" />
              <rect x="0" y="64" width="384" height="42.667" />
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
};

export default HumburgerButton;
