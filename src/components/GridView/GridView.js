import "./GridView.css"
import React from "react";
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

let GridView = () => {
    return (
        <div className="grid-view ">
            <div className="inline-view">
                <div className="military-equipment-grid">
                    <img className="png-img" src={airplane} alt="" />
                    <h2>Літаки</h2>
                </div>
                <div className="military-equipment-grid">
                    <img className="png-img" src={helicopter} alt="" />
                    <h2>Гелікоптери</h2>
                </div>
            </div>
            <div className="inline-view">
                <div className="military-equipment-grid">
                    <img className="png-img" src={tank} alt="" />
                    <h2>Танки</h2>
                </div>
                <div className="military-equipment-grid">
                    <img className="png-img" src={bbm} alt="" />
                    <h2>Бойові броньовані машини (ББМ)</h2>
                </div>
            </div>
            <div className="inline-view">
                <div className="military-equipment-grid">
                    <img className="png-img" src={buk} alt="" />
                    <h2>ЗРК "Бук"</h2>
                </div>
                <div className="military-equipment-grid">
                    <img className="png-img" src={projectile} alt="" />
                    <h2>Снаряди</h2>
                </div>
            </div>
            <div className="inline-view">
                <div className="military-equipment-grid">
                    <img className="png-img" src={grad} alt="" />
                    <h2>РСЗВ "Град"</h2>
                </div>
                <div className="military-equipment-grid">
                    <img className="png-img" src={gun} alt="" />
                    <h2>Гармати</h2>
                </div>
            </div>
            <div className="inline-view">
                <div className="military-equipment-grid">
                    <img className="png-img" src={automobile} alt="" />
                    <h2>Автомобільна техніка</h2>
                </div>
                <div className="military-equipment-grid">
                    <img className="png-img" src={tanker} alt="" />
                    <h2>Цистерни</h2>
                </div>
            </div>
            <div className="inline-view">
                <div className="military-equipment-grid">
                    <img className="png-img" src={bayraktar} alt="" />
                    <h2>Безпілотний літальний апарат</h2>
                </div>
                <div className="military-equipment-grid">
                    <img className="png-img" src={sheep} alt="" />
                    <h2>Кораблі/катери</h2>
                </div>
            </div>
        </div>
    )
}

export default GridView