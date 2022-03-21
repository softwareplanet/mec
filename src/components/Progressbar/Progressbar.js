import React from "react";
import * as styles from "./Progressbar.module.css";

export const Progressbar = () => {
  return (
    <>
      <div className={styles.bar}>
        <div className={styles.progress}></div>
      </div>
    </>
  );
};
