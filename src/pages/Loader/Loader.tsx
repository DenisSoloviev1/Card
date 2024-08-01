import React from "react";
import "./Loader.scss";

const Loader: React.FC=()=> {
  return (
    <div className="wrap">
      <div className="loader">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </div>
    </div>
  );
}

export default Loader;