import React from "react";
import classes from "./Avatar.module.scss";
import me from "../../assets/images/me.jpg"

const MyCard: React.FC = () => {

  return (
    <figure className={classes.card}>
      <img src={me} alt="My photo" className={classes.myPhoto} />
      <div className={classes.bio}>
        <h1>Денис Соловьев</h1>
        <h2>Frontend developer</h2>
      </div>
    </figure>
  );
};

export default MyCard;
