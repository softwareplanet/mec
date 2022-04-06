import React, { useContext, useEffect, useRef, useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import ToolBar from '../ToolBar/ToolBar';
import * as styles from './listsStyles.module.css';
import { debounceTime, fromEvent, startWith } from 'rxjs';
import ViewContext from './Context';

const MAX_CONTAINER_WIDTH = 900;
const GRID_GAP = 15;

let RenderList = ({ data, searchData}) => {
    const {view, setView} = useContext(ViewContext)

    let [containerWidth, setContainerWidth] = useState(MAX_CONTAINER_WIDTH);
    useEffect(() => {
        const subscribtion = fromEvent(window, 'resize')
            .pipe(
                debounceTime(250),
                startWith(MAX_CONTAINER_WIDTH) // need to path some value
            )
            .subscribe(() => setContainerWidth(container.current.clientWidth));
        return () => subscribtion.unsubscribe();
    }, []);

    const container = useRef();

  const culcCardSize = () => {    
    let cardsInRow = containerWidth >= 320 ? Math.floor(containerWidth / 160) : Math.round(containerWidth / 160);
    let cardSize = (containerWidth - (GRID_GAP * (cardsInRow - 1))) / cardsInRow;
    return {cardSize, cardsInRow};
  };  
  const {cardSize, cardsInRow} = culcCardSize();

  return (
    <>
      <ToolBar setView={setView} data={searchData} />
      <div ref={container} className={styles[view]}>
        {data.map((element, i) => (
          <CardComponent
            key={i}
            path={element.path}
            image={element.image}
            title={element.title}
            variant={view}
            size={cardSize}
            gap={GRID_GAP}
            lastInRow={ (i + 1) % cardsInRow === 0 }
          />
        ))}        
      </div>
    </>
  );
};

export default RenderList;
