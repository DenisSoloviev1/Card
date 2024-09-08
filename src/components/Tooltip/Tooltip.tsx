import React, { useState } from "react";
import classes from "./Tooltip.module.scss";
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
      className={classes.tooltipContainer}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className={classes.tooltip}>
          <NavLink to={to}>{text}</NavLink>
        </div>
      )}
    </div>
  );
}

export default Tooltip;