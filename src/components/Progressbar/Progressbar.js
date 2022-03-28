import React, { useEffect, useState } from "react";
import * as styles from "./Progressbar.module.css";
import doneIcon from "../../images/progressDone.png";
import hideIcon from "../../images/hideIcon.png";

export const Progressbar = () => {
  const [progress, setProgress] = useState(0);

  const [hideStyle, setHideStyle] = useState({ display: "block" });

  useEffect(() => {
    if (progress === 100) {
      setTimeout(function () {
        setHideStyle({ display: "none" });
      }, 5000);
    }
  }, []);

  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);

  return (
    <>
      <div
        style={hideStyle}
        className={`${styles.progressbar} ${
          progress === 100 ? styles.done : ""
        }`}
      >
        <div
          style={show ? { bottom: "0px" } : { bottom: "70px" }}
          className={styles.hideElement}
          onClick={onClick}
        >
          <p>{show ? `${progress}%` : "Сховати"}</p>
          <img
            src={hideIcon}
            style={
              show
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            }
          />
        </div>
        <div
          style={
            show && progress !== 100
              ? { display: "none" }
              : { display: "block" }
          }
          className={styles.progressbarContent}
        >
          <div className={styles.progressbarHeader}>
            <p>
              {progress !== 100
                ? "Завантаження даних для роботи офлайн"
                : "Дані завантажились"}
            </p>
            <p>{progress !== 100 ? `${progress}%` : <img src={doneIcon} />}</p>
          </div>
          <div className={styles.bar}>
            <div
              className={styles.progress}
              style={{ width: progress + "%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
