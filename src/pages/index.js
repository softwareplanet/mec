import "../components/index.css"
import React from "react";
import Header from "../components/Header/Header"
import RenderList from "../components/RenderList/RenderList";


let FirstPage = () => {
    return (
        <>
            <Header />
            <RenderList/>
        </>
    )
}

export default FirstPage