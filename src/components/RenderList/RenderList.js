import React, { useEffect, useRef, useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import ToolBar from '../ToolBar/ToolBar';
import * as styles from "./listsStyles.module.css"
import addEmptySpaces from "./EmptySpaces";
import { fromEvent, throttleTime } from 'rxjs';

let RenderList = ({ data, searchData }) => {
    let [view, setView] = useState('grid')

    let [containerWidth, setWindowWidth] = useState(typeof window !== `undefined` ? window.innerWidth : 0)
    useEffect(
        () => {
            const subscribtion = fromEvent(window, 'resize')
                .pipe(throttleTime(250))
                .subscribe(() => { setWindowWidth(container.current.clientWidth); })
            return () => subscribtion.unsubscribe()
        }
        , []);

    const container = useRef();

    return (
        <>
            <ToolBar setView={setView} data={searchData} />
            <div ref={container} className={styles[view]}>
                {
                    data.map(element =>
                        <CardComponent
                            key={element.name}
                            path={element.name}
                            image={element[view + '_img'].childImageSharp}
                            title={element.title}
                            variant={view}
                        />)
                }
                {typeof window !== `undefined` ? addEmptySpaces(containerWidth, data.length) : () => { }}
            </div>
        </>
    )
}

export default RenderList