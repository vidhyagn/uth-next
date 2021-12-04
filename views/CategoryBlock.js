import React from "react";
import Link from 'next/link';
import {IMAGE_PATH} from "../constants";
function CategoryBlock(Props) {

    let item = Props.item;
    return (
        <div className="each-hotel-category">
            <figure>
                <img src={`${IMAGE_PATH+'category/'+item.thumb}`} title={item.thumb}/>
            </figure>
            <div className="hotel-category-description">
                <h5>{item.category}</h5>
                <p>{item.descrp}</p>
                {item.hotelcount > 0 &&
                <Link href={`/hotels/${item.id}`}>
                    <button className="general-btn">View Hotels</button>
                </Link>
                }
            </div>
        </div>
    )
}

export default CategoryBlock;