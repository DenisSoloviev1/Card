import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../../widgets/Header/Header.tsx";
import Footer from "../../widgets/Footer/Footer.tsx";
import Main from "../../widgets/Main/Main.tsx";
import ParticleSystem from "../../widgets/ParticleSystem/ParticleSystem.tsx";

const Landing: React.FC = () => {
  return (
    <>
      <ParticleSystem />
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Landing;
