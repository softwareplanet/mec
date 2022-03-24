import React, { useEffect, useRef, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import ToolBar from "../ToolBar/ToolBar";
import * as styles from "./listsStyles.module.css";
import addEmptySpaces from "./EmptySpaces";
import { fromEvent, throttleTime } from "rxjs";

let CategoryList = ({ data, searchData }) => {
  let [view, setView] = useState("grid");

  let [containerWidth, setWindowWidth] = useState(
    typeof window !== `undefined` ? window.innerWidth : 0
  );
  useEffect(() => {
    const subscribtion = fromEvent(window, "resize")
      .pipe(throttleTime(250))
      .subscribe(() => {
        setWindowWidth(container.current.clientWidth);
      });
    return () => subscribtion.unsubscribe();
  }, []);

  const container = useRef();

  console.log(data);

  return (
    <>
      <ToolBar setView={setView} data={searchData} />
      <div ref={container} className={styles[view]}>
        {data.map((element, i) => 
          <CardComponent
            key={i}
            path={element.slug}
            image={element.frontmatter.image.childImageSharp}
            title={element.frontmatter.title}
            variant={view}
          />)}
        {typeof window !== `undefined`
          ? addEmptySpaces(containerWidth, data.length)
          : () => {}}
      </div>
    </>
  );
};

export default CategoryList;
