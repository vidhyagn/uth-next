import React, {useState} from "react";

function HotelSpReqList(Props){
    const [spRequests, setSpRequests] = useState(Props.spRequests);
    const [selectedSpReqs, setSelectedSpReqs] = useState(Props.selectedSpReqs);
    const [selectedSpReqIds, setSelectedSpReqIds] = useState(Props.selectedSpReqIds);

    return(
        <div>

            <div className="sub-header">
                <h5>Payable</h5>
            </div>
            <ul>                
                {spRequests.payable.map(sp =>
                    <li>
                        <div className="checkbox">
                            <label>{sp.title}- <span className="font-bold">₹ {sp.rate}</span>
                            <input type="checkbox" name="sp_req" id={`sp_req_${sp.sp_id}`} value={sp.sp_id} onChange={(e) => Props.handleSpSelection(e, sp)}
                            defaultChecked={selectedSpReqIds.includes(sp.sp_id)}/>
                            <div className="control-indicator"></div>
                            </label>
                        </div>
                    </li>

                )}
                
            </ul>

            <div className="sub-header">
                <h5>Non Payable</h5>
            </div>

            <ul> 
                {spRequests.nonpayable.map(sp =>
                    <li>
                        <div className="checkbox">
                            <label>{sp.title}
                            <input type="checkbox" name="sp_req" id={`sp_req_${sp.sp_id}`} value={sp.sp_id} onChange={(e) => Props.handleSpSelection(e, sp)} />
                            <div className="control-indicator"></div>
                            </label>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default HotelSpReqList;
