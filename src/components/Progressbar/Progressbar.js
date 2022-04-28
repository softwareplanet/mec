import React, { useEffect, useState, useContext } from "react";
import * as styles from "./Progressbar.module.css";
import doneIcon from "../../images/progressDone.png";
import hideIcon from "../../images/hideIcon.png";
import ProgressContext from "../Layout/ProgressContext";

export const Progressbar = () => {
  const [progress, setProgress] = useState(0);

  const {progressState, setProgressState, showProgress, setShowProgress} = useContext(ProgressContext)

  const caclProgress = (cached, total) => {
    if (total != 0) {
      return Math.round((cached / total) * 100);
    } else {
      return 100;
    }
  }

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      try {
        navigator.serviceWorker.addEventListener('message', event => {
          // event is a MessageEvent object
          setProgress(caclProgress(event.data.cached, event.data.total))
          if (event.data.type === "INSTALLING") {
            setProgressState(true)
          }
          if (event.data.type === "DONE") {
            setTimeout(function () {
              setProgressState(false);
            }, 5000);
          }
        });
      } catch (e) {
        console.log('sw register fail');
      }
    }

  }, []);

  return (
    <>
      <div
        style={{ display: progressState ? 'block' : 'none'}}
        className={`${styles.progressbar} ${progress === 100 ? styles.done : ""
          }`}
      >
        <div
          style={{ bottom: showProgress ? "70px" : "0px" } }
          className={styles.hideElement}
          onClick={() => setShowProgress(!showProgress)}
        >
          <p>{showProgress ? "Сховати" : `${progress}%`}</p>
          <img
            src={hideIcon}
            style={
              showProgress
                ? { transform: "rotate(0deg)" }
                : { transform: "rotate(180deg)" }
            }
          />
        </div>
        <div
          style={{ display: showProgress && progress !== 100 ? "block" : "none" }}
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
