import React, { useEffect, useRef, useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import lookup from "../../images/lookup.svg"
import Switcher from "../Switcher/Switcher";
import * as styles from "./listsStyles.module.css"
import addEmptySpaces from "./EmptySpaces";
import { fromEvent, throttleTime } from 'rxjs';

let CategoryList = ({ data }) => {
    let [view, setView] = useState('grid')

    let [containerWidth, setWindowWidth] = '';
    if (typeof window !== `undefined`) {
        [containerWidth, setWindowWidth] = useState(window.innerWidth)
        useEffect(
            () => {
                const subscribtion = fromEvent(window, 'resize')
                    .pipe(throttleTime(250))
                    .subscribe(() => { setWindowWidth(container.current.clientWidth); })
                return () => subscribtion.unsubscribe()
            }
            , []);
    }
    const container = useRef();

    return (
        <>
            <div className={styles.toolbar}>
                <img className={styles.lookup} src={lookup} alt="" />
                <input type="search" placeholder="Пошук..." autoComplete="off" />
                <Switcher onViewChange={setView} />
            </div>
            <div ref={container} className={styles[view]}>
                {

                    data.map((element, i) =>
                        <CardComponent
                            key={i}
                            path={element.slug}
                            image={element.frontmatter.image.childImageSharp}
                            title={element.frontmatter.title}
                            variant={view}
                        />)
                }
                {typeof window !== `undefined` ? addEmptySpaces(containerWidth, data.length) : () => { }}
            </div>
        </>
    )
}

export default CategoryList


