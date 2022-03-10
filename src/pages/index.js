import "../components/index.css"
import React from "react";
import Header from "../components/Header/Header"
import ListView from "../components/ListView/ListView";
import GridView from "../components/GridView/GridView";
import ImageSlider from '../components/Slider/ImageSlider';

let FirstPage = () => {
    return (
        <>
            <Header />
            <ListView />
            <GridView />
            <ImageSlider />
        </>
    )
}

export default FirstPage