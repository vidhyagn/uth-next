import React from "react";
import {IMAGE_PATH} from "../../constants";
function FacilityBlock(Props) {

    let item = Props.item;
    let imgAlign = Props.imgAlign;
    return (
        <section className="boiler-section">
            {imgAlign === 'left' &&
            <figure className="boiler-image">
                <img src={`${IMAGE_PATH + item.f_img}`} title={item.f_img}/>
            </figure>
            }
            <div className="boiler-description">
                <h5>{item.f_title}</h5>
                <p>{item.f_desc} </p>
            </div>
            {imgAlign === 'right' &&
            <figure className="boiler-image">
                <img src={`${IMAGE_PATH + item.f_img}`} title={item.f_img}/>
            </figure>
            }
        </section>
    )
}

export default FacilityBlock;