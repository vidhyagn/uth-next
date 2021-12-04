import React, {useState} from "react";
import {IMAGE_PATH} from "../constants";
function RoomBlock(Props) {


    let item = Props.item;
    let images = item.images || [];
    let thumb = item.roomimg;

    let showfacCount = 5;
    if(item.roomsize !== '') {
        showfacCount =4;
    }

    return (
        <div className="each-room">
            <figure>
                <img src={`${IMAGE_PATH+thumb}`} title={thumb}/>
            </figure>
            <div className="room-description">
                <h5>{item.name}</h5>
                <p><div dangerouslySetInnerHTML={{__html : item.room_desc}} /></p>
                <ul className="room-facilities-list">
                    <li className="person-ico">
                        Upto {item.max_capacity_adult} {parseInt(item.extrabedcount )> 0 && <>+ {item.extrabedcount}</> } Guests
                    </li>
                    {item.roomsize !== '' &&
                    <li className="size-ico">{item.roomsize}</li>
                    }
                    {item.roomfacilities.slice(0,4).map((fac,index) =>{
                            let fac_class = '';
                            if (fac.facility_id === 1) {
                                fac_class = 'pool-ico';
                            }
                            else if (fac.facility_id === 2) {
                                fac_class = 'tv-ico';
                            }
                            else if (fac.facility_id === 3) {
                                fac_class = 'minibar-ico';
                            }
                            else if (fac.facility_id === 4) {
                                fac_class = 'coffee-maker-ico';
                            }
                            else if (fac.facility_id === 5) {
                                fac_class = 'room-safe-ico';
                            }
                            else if (fac.facility_id === 6) {
                                fac_class = 'restaurant-ico';
                            }
                            else if (fac.facility_id === 7) {
                                fac_class = 'bathrobe-ico';
                            }
                            else if (fac.facility_id === 8) {
                                fac_class = 'beach-ico';
                            }
                            return(
                                <li className={fac_class}>{fac.facility}</li>
                            )
                        }

                    )}

                </ul>


            </div>
        </div>
    )
}

export default RoomBlock;