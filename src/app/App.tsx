import React, { useState, useEffect } from "react";
import "./App.scss";
import Landing from "../pages/Landing/Landing.tsx";
import Loader from "../pages/Loader/Loader.tsx";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <Landing />;
};

export default App;
