import React from "react";
import {IMAGE_PATH} from "../constants";
function SummaryItem(Props) {

    let item = Props.item;
    let images = item.images || [];
    let thumb = item.roomimg;

    let total_price = parseFloat(item.room_price)* parseInt(item.qty)

    return (
        <tr>
            <td>
                <div className="each-available-room">
                    <figure>
                        <img
                            src={`${IMAGE_PATH+thumb}`} title={thumb}/>

                    </figure>
                    <div className="available-room-details">
                        <div className="room-details-left">
                            <h5>{item.name}</h5>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="counter-box">
                <button className="down" onClick={(e) => Props.selectRoom(item, 'sub',e)}>-</button>
                <input type="number" name="qty" value={item.qty} min="1" onChange={(e) => Props.changeQty(item,e)} readOnly={true} />
                <button className="up" onClick={(e) => Props.selectRoom(item, 'add',e)}>+</button>
            </div>
            </td>
            <td>₹ {parseFloat(item.room_price).toFixed(2)}</td>
            <td>₹ {total_price.toFixed(2)}</td>            
            <td><button className="delete-item" onClick={(e)=>Props.selectRoom(item,'remove',e)}></button></td>
        </tr>
    )
}

export default SummaryItem;