import React from 'react'

import "./CardComponent.css"

import airplane from "../../images/airplane.png"
import helicopter from "../../images/helicopter.png"
import tank from "../../images/tank.png"
import bbm from "../../images/bbm.png"
import buk from "../../images/buk.png"
import projectile from "../../images/projectile.png"
import grad from "../../images/grad.png"
import gun from "../../images/gun.png"
import automobile from "../../images/automobile.png"
import tanker from "../../images/tanker.png"
import bayraktar from "../../images/bayraktar.png"
import sheep from "../../images/sheep.png"

import airplaneSvg from "../../images/airplane.svg"
import helicopterSvg from "../../images/helicopter.svg"
import tankSvg from "../../images/tank.svg"
import bbmSvg from "../../images/bbm.svg"
import bukSvg from "../../images/buk.svg"
import projectileSvg from "../../images/projectile.svg"
import gradSvg from "../../images/grad.svg"
import gunSvg from "../../images/gun.svg"
import automobileSvg from "../../images/automobile.png"
import tankerSvg from "../../images/tanker.png"
import bayraktarSvg from "../../images/bayraktar.png"
import sheepSvg from "../../images/sheep.png"

let RenderList = () => {

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
            GridImage: bayraktar ,
            ListImage: bayraktarSvg
        },
        {
            name: "sheep",
            title: "Кораблі/катери",
            GridImage: sheep ,
            ListImage: sheepSvg
        }
    ]

    let grid = true

    return (
        <div className={grid ? 'categories grid' : 'categories list'}>
            {
            categoryList.map(element => 
                <div  key={element.name} className="military-equipment">
                    <img className="png-img" src={grid ? element.GridImage:element.ListImage} alt="" />
                    <h2>{element.title}</h2>
                </div>)
            }
        </div>
    )
}

export default RenderList