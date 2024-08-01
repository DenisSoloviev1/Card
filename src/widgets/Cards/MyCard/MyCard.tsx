import React from "react";
import "./MyCard.scss";
import me from "../../../assets/images/me0.jpg"

const MyCard: React.FC = () => {
  // const me = require("../../../assets/images/me0.jpg");

  return (
    <div className="card">
      <img src={me} alt="me" className="myPhoto" />
      <div className="bio">
        <h1>Денис Соловьев</h1>
        <span><p>Frontend developer</p></span>
      </div>
    </div>
  );
};

export default MyCard;
