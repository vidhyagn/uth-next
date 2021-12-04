import React from "react";
import Link from 'next/link';
import {IMAGE_PATH} from "../constants";

function HotelBlock(Props) {
    let detail = Props.detail;
    let facilities = detail.facilities || [];
    return (
        <div className="each-listed-item">
            <figure>
                <img src={`${IMAGE_PATH+detail.hotelimg}`} title={detail.hotelimg}/>
                {(parseInt(detail.hotel_rating) > 0 &&<span>{parseInt(detail.hotel_rating) === 3 ? 'Deluxe' : parseInt(detail.hotel_rating) === 4 ? 'Premium' : parseInt(detail.hotel_rating) === 5 ? 'Luxury' :  detail.hotel_rating + ' Star'}</span>)}
            </figure>
            <div className="listed-item-details">
                <div className="listed-item-inner">
                    <h5>{detail.hotel_name}</h5>
                    <p className="location">{detail.address}</p>

                    {facilities.length > 0 &&
                    <div className="feature-block">
                        <ul>
                            {facilities.map((fac, fac_ind) =>

                                fac_ind < 4 &&
                                <li className={fac.class}>{fac.facility}</li>
                            )}
                        </ul>
                    </div>
                    }
                </div>
                <div className="button-block">
                    <>
                        <Link href={`/hotel/${detail.canonicalurl}`}>
                            <button className="general-btn">More Details</button>
                        </Link>

                    </>
                </div>
            </div>
        </div>
    )
}
export default HotelBlock;