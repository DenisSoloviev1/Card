import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Main.scss";
import MyCard from "../../components/Avatar/Avatar.tsx";
import Intro from "../Intro/Intro.tsx";
import AboutMe from "../AboutMe/AboutMe.tsx";
import Skills from "../Skills/Skills.tsx";
import Portfolio from "../Portfolio/Portfolio.tsx";

const Main: React.FC = () => {
  

  return (
    <main>
      <div className="container">
        <MyCard />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
