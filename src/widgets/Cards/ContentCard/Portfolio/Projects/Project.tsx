import React from "react";
import "./Project.scss";

interface ProgectProps {
  images: string;
  text: string;
}

const Project: React.FC<ProgectProps> = ({ images, text }) => {
  return (
    <article>
      <div className="content">
        <img src={images} alt="project img" />
        <div className="text">{text}</div>
      </div>
      <h3>{text}</h3>
    </article>
  );
};

export default Project;
