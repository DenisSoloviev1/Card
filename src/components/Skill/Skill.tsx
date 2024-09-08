import React from "react";
import classes from "./Skill.module.scss";

interface SkillProps{
  url: string;
  svg: JSX.Element;
  name: string;
}

const Skill: React.FC<SkillProps> = ({ url, svg, name }) => {
  return (
    <a href={url} className={classes.skill} target="_blank" rel="noreferrer">
      {svg}
      <h4>{name}</h4>
    </a>
  );
}

export default Skill;