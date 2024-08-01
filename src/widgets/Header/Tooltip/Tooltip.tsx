import React, { useState } from "react";
import "./Tooltip.scss";
import { NavLink } from "react-router-dom";

interface TooltipProps {
  text: string;
  to: string;
  children: any;
}

const Tooltip: React.FC<TooltipProps> = ({ text, to, children }) =>{
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="tooltip">
          <NavLink to={to}>{text}</NavLink>
        </div>
      )}
    </div>
  );
}

export default Tooltip;