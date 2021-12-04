import React from "react";
import {IMAGE_PATH} from "../constants";
function FacilityNewBlock(Props) {

    let item = Props.item;
    let imgAlign = Props.imgAlign;
    return (

        <div className="each-room">
            <figure>
                <img src={`${IMAGE_PATH + item.f_img}`} title={item.f_img}/>
            </figure>
            <div className="room-description fac-description">
                <h5>{item.f_title}</h5>
                <p>{item.f_desc}</p>
            </div>
        </div>

    )
}

export default FacilityNewBlock;