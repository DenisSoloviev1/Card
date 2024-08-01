import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Main.scss";
import MyCard from "../Cards/MyCard/MyCard.tsx";
import Intro from "../Cards/ContentCard/Intro/Intro.tsx";
import AboutMe from "../Cards/ContentCard/AboutMe/AboutMe.tsx";
import Skills from "../Cards/ContentCard/Skills/Skills.tsx";
import Portfolio from "../Cards/ContentCard/Portfolio/Portfolio.tsx";

const Main: React.FC = () => {
  return (
    <main>
      <MyCard />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </main>
  );
}

export default Main;