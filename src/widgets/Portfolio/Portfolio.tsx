import React, { useState } from "react";
import classes from "./Portfolio.module.scss";
import Project from "../../components/ProjectsCard/ProjectCard.tsx";
import MoreInfoCard from "../../components/MoreInfoCard/MoreInfoCard.tsx";
import LandingClinic from "../../assets/images/Landing-Clinic/slide0.png";
import RickAndMorty from "../../assets/images/Rick-and-Morty/slide0.png";
import PhotoAlbum from "../../assets/images/PhotoAlbum/slide0.png";
import Sweetshop from "../../assets/images/Sweetshop/slide0.png";

const Portfolio: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handleClick = (projectName: string) => {
    setActiveProject(activeProject === projectName ? null : projectName);
  };

  return (
    <div className="portfolio">
      <h2>Портфолио</h2>
      <h3>Мои работы</h3>
      <section className={classes.wrap}>
        <div className={classes.left}>
          <Project
            images={LandingClinic}
            text={"Лендинг для сайта клиники"}
            handleClick={() => handleClick("LandingClinic")}
          >
            {activeProject === "LandingClinic" && (
              <MoreInfoCard
                name={"Лендинг для сайта клиники"}
                text={"Подробная информация о проекте"}
                handleClick={() => handleClick("LandingClinic")}
                show={activeProject === "LandingClinic"}
              />
            )}
          </Project>

          <Project
            images={Sweetshop}
            text={"Лендинг для кондитерской"}
            handleClick={() => handleClick("Sweetshop")}
          >
            {activeProject === "Sweetshop" && (
              <MoreInfoCard
                name={"Лендинг для кондитерской"}
                text={"Подробная информация о проекте"}
                handleClick={() => handleClick("Sweetshop")}
                show={activeProject === "Sweetshop"}
              />
            )}
          </Project>
        </div>

        <div className={classes.right}>
          <Project
            images={RickAndMorty}
            text={'Информационный сайт "Rick and Morty"'}
            handleClick={() => handleClick("RickAndMorty")}
          >
            {activeProject === "RickAndMorty" && (
              <MoreInfoCard
                name={'Информационный сайт "Rick and Morty"'}
                text={"Подробная информация о проекте"}
                handleClick={() => handleClick("RickAndMorty")}
                show={activeProject === "RickAndMorty"}
              />
            )}
          </Project>

          <Project
            images={PhotoAlbum}
            text={"Лендинг фотоальбом"}
            handleClick={() => handleClick("PhotoAlbum")}
          >
            {activeProject === "PhotoAlbum" && (
              <MoreInfoCard
                name={"Лендинг фотоальбом"}
                text={"Подробная информация о проекте"}
                handleClick={() => handleClick("PhotoAlbum")}
                show={activeProject === "PhotoAlbum"}
              />
            )}
          </Project>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
