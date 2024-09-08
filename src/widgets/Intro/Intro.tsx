import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Intro.module.scss";
import DowloadButton from "../../components/Buttons/DowloadButton/DowloadButton.tsx";
import circularText from "../../assets/images/circularText.png";
import { EyeSvg } from "../../assets/svg.tsx";

const Intro: React.FC = () => {
  return (
    <div className="intro">
      <h2>главная</h2>
      <h3>Приветствую</h3>
      <p>
        Я Frontend-разработчик с огромным интересом к реализации красивых и
        функциональных интерфейсов, всегда стремлюсь к саморазвитию и
        улучшению, делаю то, что завораживает и вовлекает каждого
      </p>
      <div className={classes.buttonCircleGroup}>
        <DowloadButton
          url={"https://disk.yandex.ru/i/VO65LsN56t1oFQ"}
          text={"Скачать РЕЗЮМЕ"}
        />
        <div className={classes.circle}>
          <NavLink to="/portfolio">
            <img src={circularText} alt="circular text" />
            <EyeSvg />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Intro;
