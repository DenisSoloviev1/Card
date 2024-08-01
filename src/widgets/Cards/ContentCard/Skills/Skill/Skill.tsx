import React from "react";
import "./Skill.scss";

interface SkillProps{
  url: string;
  svg: JSX.Element;
  name: string;
}

const Skill: React.FC<SkillProps> = ({ url, svg, name }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {svg}
      <p>{name}</p>
    </a>
  );
}

export default Skill;