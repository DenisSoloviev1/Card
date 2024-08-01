import React from "react";
import { NavLink } from "react-router-dom";
import "./Intro.scss";
import DowloadButton from "../../../Buttons/DowloadButton/DowloadButton.tsx";
import circularText from "./circularText.png"; 

const Intro: React.FC = () => {
  return (
    <div className="intro">
      <title>главная</title>
      <h1>Приветствую</h1>
      <p>
        Я Frontend-разработчик с огромным интересом к реализации красивых и
        функциональных интерфейсов, постоянно стремлюсь к саморазвитию и
        улучшению, делаю то, что завораживает и вовлекает каждого
      </p>
      <div className="buttonCircleGroup">
        <DowloadButton
          url={"https://disk.yandex.ru/i/VO65LsN56t1oFQ"}
          text={"Скачать РЕЗЮМЕ"}
        />
        <div className="circle">
          <NavLink to="/portfolio">
            <img src={circularText} alt="circular text" />
            <svg viewBox="0 0 512 512">
              <g>
                <g>
                  <path d="m499.4,250.8c-51-86.3-143.6-140.4-243.4-140.4s-192.5,54.1-243.4,140.4c-2.1,3.1-2.1,7.3 5.32907e-15,10.4 51,86.3 143.6,140.4 243.4,140.4s192.5-54.1 243.4-140.4c2.1-3.1 2.1-7.3 0-10.4zm-243.4,130c-90.5,0-174.8-47.8-221.6-124.8 46.8-77 131.1-124.8 221.6-124.8s174.8,47.8 221.6,124.8c-46.8,77-131.1,124.8-221.6,124.8z"></path>
                  <path d="m256,162.4c-52,0-93.6,41.6-93.6,93.6 0,52 41.6,93.6 93.6,93.6s93.6-41.6 93.6-93.6c0-52-41.6-93.6-93.6-93.6zm0,166.4c-40.6,0-72.8-32.3-72.8-72.8s32.3-72.8 72.8-72.8 72.8,32.3 72.8,72.8-32.2,72.8-72.8,72.8z"></path>
                  <path d="m256,214.4v20.8c11.4,0 20.8,9.4 20.8,20.8s-9.4,20.8-20.8,20.8-20.8-9.4-20.8-20.8h-20.8c0,22.9 18.7,41.6 41.6,41.6 22.9,0 41.6-18.7 41.6-41.6s-18.7-41.6-41.6-41.6z"></path>
                </g>
              </g>
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Intro;