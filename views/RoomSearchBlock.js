import React from "react";
import {IMAGE_PATH} from "../constants";
function RoomSearchBlock(Props) {

    let item = Props.item;
    let images = item.images || [];
    let thumb = item.roomimg;

    let selectedRoomIds = Props.selectedRoomIds || [];
    return (
        <div className={`each-available-room ${selectedRoomIds.includes(item.roomid) ? 'selected':''}`} onClick={(e)=> Props.selectRoom(item,selectedRoomIds.includes(item.roomid)?'remove':'choose',e)}>
            <figure>
                <img src={`${IMAGE_PATH+thumb}`} title={thumb} />
            </figure>
            <div className="available-room-details">
                <div className="room-details-left">
                    <h5>{item.name}</h5>
                    <p><div dangerouslySetInnerHTML={{__html : item.room_desc}} /></p>

                    <h6 className="person-ico">Upto {item.max_capacity_adult} {parseInt(item.extrabedcount )> 0 && <>+ {item.extrabedcount}</> } Guests</h6>

                    <div className="short-link-block">
                        <a onClick={() => Props.showFullDetail(item.roomid)} >View more</a>
                    </div>
                </div>
                <div className="room-details-right">
                    <div className="counter-box">
                        <button className="down" onClick={(e) => Props.selectRoom(item, 'sub',e)}>-</button>
                        <input type="number" name="qty" value={item.qty} min="0" max={item.roomcount} onChange={(e) => Props.changeQty(item,e)} readOnly={true} />
                        <button className="up" onClick={(e) => Props.selectRoom(item, 'add',e)}>+</button>
                    </div>
                    <div className="price-right-text">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomSearchBlock;