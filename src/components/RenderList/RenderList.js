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

let RenderList = () => {

    let categoryList = [
        {
            name: "airplane",
            title: "Літаки",
            image: airplane ,
        },
        {
            name: "helicopter",
            title: "Гелікоптери",
            image: helicopter ,
        },
        {
            name: "tanks",
            title: "Танки",
            image: tank ,
        },
        {
            name: "bbm",
            title: "Бойові броньовані машини (ББМ)",
            image: bbm ,
        },
        {
            name: "buk",
            title: `ЗРК "Бук"`,
            image: buk ,
        },
        {
            name: "projectile",
            title: "Снаряди",
            image: projectile ,
        },
        {
            name: "grad",
            title: `РСЗВ "Град"`,
            image: grad ,
        },
        {
            name: "gun",
            title: "Гармати",
            image: gun ,
        },
        {
            name: "automobile",
            title: "Автомобільна техніка",
            image: automobile ,
        },
        {
            name: "tanker",
            title: "Цистерни",
            image: tanker ,
        },
        {
            name: "bayraktar",
            title: "Безпілотний літальний апарат",
            image: bayraktar ,
        },
        {
            name: "sheep",
            title: "Кораблі/катери",
            image: sheep ,
        }
    ]

    return (
        <div className='categories grid'>
            {
            categoryList.map(element => 
                <div  key={element.name} className="military-equipment">
                    <img className="png-img" src={element.image} alt="" />
                    <h2>{element.title}</h2>
                </div>)
            }
        </div>
    )
}

export default RenderList