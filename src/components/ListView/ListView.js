import "./ListView.css"
import React from "react";
import airplane from "../../images/airplane.svg"
import helicopter from "../../images/helicopter.svg"
import tank from "../../images/tank.svg"
import bbm from "../../images/bbm.svg"
import buk from "../../images/buk.svg"
import projectile from "../../images/projectile.svg"
import grad from "../../images/grad.svg"
import gun from "../../images/gun.svg"

let ListView = () => {
    return (
        <div className="list-view ">
            <div className="military-equipment">
                <img className="vector-img" src={airplane} alt="" />
                <h2>Літаки</h2>
            </div>
            <div className="military-equipment">
                <img className="vector-img" src={helicopter} alt="" />
                <h2>Гелікоптери</h2>
            </div>
            <div className="military-equipment">
                <img className="vector-img" src={tank} alt="" />
                <h2>Танки</h2>
            </div>
            <div className="military-equipment">
                <img className="vector-img" src={bbm} alt="" />
                <h2>Бойові броньовані машини (ББМ)</h2>
            </div>
            <div className="military-equipment">
                <img className="vector-img" src={buk} alt="" />
                <h2>ЗРК "Бук"</h2>
            </div>
            <div className="military-equipment">
                <img className="vector-img" src={projectile} alt="" />
                <h2>Снаряди</h2>
            </div>
            <div className="military-equipment">
                <img className="vector-img" src={grad} alt="" />
                <h2>РСЗВ "Град"</h2>
            </div>
            <div className="military-equipment">
                <img className="vector-img" src={gun} alt="" />
                <h2>Гармати</h2>
            </div>
        </div>
    )
}

export default ListView