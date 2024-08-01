import React from "react";
import "./Portfolio.scss";
import Project from "./Projects/Project.tsx";
import LandingClinic from "./images/Landing-Clinic/slide0.png";
import RickAndMorty from "./images/Rick-and-Morty/slide0.png";
import PhotoAlbum from "./images/PhotoAlbum/slide0.png";

const Portfolio: React.FC = () => {

  return (
    <div className="portfolio">
      <title>портфолио</title>
      <h1>Мои работы</h1>
      <section>
        <div className="left">
          <Project
            images={LandingClinic}
            text={"Landing for the clinic"}
          />
          <Project
            images={PhotoAlbum}
            text={"Photo album landing "}
          />
        </div>
        <div className="right">
          <Project
            images={RickAndMorty}
            text={"Rick and Morty site"}
          />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
