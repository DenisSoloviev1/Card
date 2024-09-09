import React from "react";
import classes from "./Skill.module.scss";

interface SkillProps {
  url: string;
  svg: JSX.Element;
  name: string;
}

const Skill: React.FC<SkillProps> = ({ url, svg, name }) => {
  return (
    <figure className={classes.skill}>
      <a href={url} target="_blank" rel="noreferrer">
        {svg}
      </a>

      <figcaption>
        <h4>{name}</h4>
      </figcaption>
    </figure>
  );
};

export default Skill;
