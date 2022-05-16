import React, { useEffect, useState, useContext } from "react";
import * as styles from "./Progressbar.module.css";
import doneIcon from "../../images/progressDone.png";
import hideIcon from "../../images/hideIcon.png";
import ProgressContext from "../Layout/ProgressContext";
import { Network } from '@capacitor/network';
import clsx from 'clsx';

export const Progressbar = () => {
  const {loadingProgress, setLoadingProgress, progressState, setProgressState, showProgress, setShowProgress} = useContext(ProgressContext)

  const caclProgress = (cached, total) => {
    if (total != 0) {
      return Math.round((cached / total) * 100);
    } else {
      return 100;
    }
  }

  const notSsr = typeof window !== 'undefined';
  let [online, setOnline] = useState(notSsr ? navigator.onLine : true);

  useEffect(() => {
      if (notSsr) {
          const handle = Network.addListener('networkStatusChange', status =>
              setOnline(status.connected)
          );
          return () => handle.then(h => h.remove());
      }
  }, [notSsr]);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      try {
        navigator.serviceWorker.addEventListener('message', event => {
          // event is a MessageEvent object
          if (event.data.cached && event.data.total){
            setLoadingProgress(caclProgress(event.data.cached, event.data.total))
            if (event.data.type === "INSTALLING" || event.data.type === "CACHE_DID_UPDATE") {
              setProgressState(true)
            }
            if (event.data.type === "DONE") {
              setTimeout(function () {
                window.location.reload();
                setProgressState(false);
              }, 5000);
            }
          }
          if (event.data.type === "RELOAD"){
            window.location.reload();
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
        className={clsx(
          styles.progressbar, 
          {[styles.done]: loadingProgress === 100},
          {[styles.offline]: !online}
        )}
      >
        <div
          style={{ bottom: showProgress ? "70px" : "0px" } }
          className={styles.hideElement}
          onClick={() => setShowProgress(!showProgress)}
        >
          <p>{showProgress ? "Сховати" : `${loadingProgress}%`}</p>
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
          style={{ display: !showProgress && loadingProgress !== 100 ? "none" : "block"  }}
          className={styles.progressbarContent}
        >
          <div className={styles.progressbarHeader}>
            {
              online ? 
              (
                <div className={styles.onlineContent}>
                 
                        <p>
                        {
                          loadingProgress !== 100
                            ? "Завантаження даних для роботи офлайн"
                            : "Дані завантажились"
                        }
                        </p>
                        <p>
                          {
                            loadingProgress !== 100 ? `${loadingProgress}%` : <img src={doneIcon} />
                          }
                        </p>
                </div>
              ) 
              : 
              (
                <div className={styles.offlineContent}>
                  <p>
                    Помилка завантаження даних. Зв'язок розірвано 
                  </p>
                  <p style={{fontSize: "12px"}}>
                    Встановіть зв'язок та перезавантажте сторінку
                  </p>
                </div>
              )
            }
          </div>
          <div className={styles.bar}>
            <div
              className={styles.progress}
              style={{ width: loadingProgress + "%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
