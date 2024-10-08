import React from "react";
import classes from "./ProjectCard.module.scss";

interface ProjectProps {
  images: string;
  text: string;
  handleClick: () => void;
  children?: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({ images, text, handleClick, children }) => {
  return (
    <figure className={classes.projectCard} onClick={handleClick}>
      <div className={classes.content}>
        <img src={images} alt="Project img" />
        <p className={classes.text}>{text}</p>
      </div>
      <figcaption><h4>{text}</h4></figcaption>
      {children && <>{children}</>}
    </figure>
  );
};

export default Project;


