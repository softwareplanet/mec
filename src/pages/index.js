import "../components/index.css"
import React from "react";
import Header from "../components/Header/Header"
import RenderList from "../components/RenderList/RenderList";

import airplane from "../images/airplane.png"
import helicopter from "../images/helicopter.png"
import tank from "../images/tank.png"
import bbm from "../images/bbm.png"
import buk from "../images/buk.png"
import projectile from "../images/projectile.png"
import grad from "../images/grad.png"
import gun from "../images/gun.png"
import automobile from "../images/automobile.png"
import tanker from "../images/tanker.png"
import uav from "../images/uav.png"
import ship from "../images/ship.png"
import airplaneSvg from "../images/airplane.svg"
import helicopterSvg from "../images/helicopter.svg"
import tankSvg from "../images/tank.svg"
import bbmSvg from "../images/bbm.svg"
import bukSvg from "../images/buk.svg"
import projectileSvg from "../images/projectile.svg"
import gradSvg from "../images/grad.svg"
import gunSvg from "../images/gun.svg"
import automobileSvg from "../images/automobile.png"
import tankerSvg from "../images/tanker.png"
import uavSvg from "../images/uav.png"
import shipSvg from "../images/ship.png"

let FirstPage = () => {


    let categoryList = [
        {
            name: "airplane",
            title: "Літаки",
            GridImage: airplane ,
            ListImage: airplaneSvg
        },
        {
            name: "helicopter",
            title: "Гелікоптери",
            GridImage: helicopter ,
            ListImage: helicopterSvg
        },
        {
            name: "tanks",
            title: "Танки",
            GridImage: tank ,
            ListImage: tankSvg
        },
        {
            name: "bbm",
            title: "Бойові броньовані машини (ББМ)",
            GridImage: bbm ,
            ListImage: bbmSvg
        },
        {
            name: "buk",
            title: `ЗРК "Бук"`,
            GridImage: buk ,
            ListImage:bukSvg
        },
        {
            name: "projectile",
            title: "Снаряди",
            GridImage: projectile ,
            ListImage: projectileSvg
        },
        {
            name: "grad",
            title: `РСЗВ "Град"`,
            GridImage: grad ,
            ListImage: gradSvg
        },
        {
            name: "gun",
            title: "Гармати",
            GridImage: gun ,
            ListImage: gunSvg
        },
        {
            name: "automobile",
            title: "Автомобільна техніка",
            GridImage: automobile ,
            ListImage: automobileSvg
        },
        {
            name: "tanker",
            title: "Цистерни",
            GridImage: tanker ,
            ListImage: tankerSvg
        },
        {
            name: "bayraktar",
            title: "Безпілотний літальний апарат",
            GridImage: uav ,
            ListImage: uavSvg
        },
        {
            name: "sheep",
            title: "Кораблі/катери",
            GridImage: ship ,
            ListImage: shipSvg
        }
    ]

    return (
        <>
            <Header />
            <RenderList data={categoryList}/>
        </>
    )
}

export default FirstPage