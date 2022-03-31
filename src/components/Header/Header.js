import { Link } from "gatsby";
import React from "react";
import tank from "../../images/tank_img.svg";
import * as styles from "./Header.module.css";
import arrow from "../../equipment/images/arrow-left.png";

let Header = (props) => {
  props = props[0];
  return (
    <Link to={props.backPath || "/"}>
      <div className={styles.head}>
        {props.backPath ? (
          <img height="24px" src={arrow} />
        ) : (
          <img src={tank} alt="" className={styles.logo} />
        )}
        <h1>{props.name}</h1>
      </div>
    </Link>
  );
};

export default Header;
