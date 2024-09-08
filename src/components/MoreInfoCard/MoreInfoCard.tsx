import React from "react";
import classes from "./MoreInfoCard.module.scss";

interface MoreInfoCardProps {
  name: string;
  text: string;
  show: boolean;
  handleClick: () => void;
}

const MoreInfoCard: React.FC<MoreInfoCardProps> = ({
  name,
  text,
  show,
  handleClick,
}) => {
  return (
    <div
      className={`${classes.modalWindow} ${show ? classes.show : ""}`}
      onClick={handleClick}
    >
      <div
        className={classes.moreInfoCard}
        onClick={(e) => e.stopPropagation()}
      >
        <h4>{name}</h4>
        <p>{text}</p>
        <button onClick={handleClick}>Закрыть</button>
      </div>
    </div>
  );
};

export default MoreInfoCard;
