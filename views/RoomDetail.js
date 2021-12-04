import React, {Component} from "react";
import ContentSlider from "./common/hotelSlider";
import {ModalBody} from "reactstrap";
class RoomDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        let roomDetail = this.props.roomDetail;
        console.log(roomDetail)
        let roomImages = (roomDetail && roomDetail.images && roomDetail.images.length > 0) ? roomDetail.images.filter(img => img.filename === roomDetail.roomimg) : []
        let roomfacilities = (roomDetail && roomDetail.roomfacilities && roomDetail.roomfacilities.length > 0) ? roomDetail.roomfacilities : []

        return(
            <>
                {roomDetail &&

                <section className="details-bannner">

                    <button className="closeModal" onClick={()=>this.props.hideFullDetail()}></button>

                    <div className="carousel-container">
                        <div className="container">
                            <div className="carousel-text">
                                <h5>{roomDetail.name}</h5>
                            </div>

                            <div className="price-tag">₹ {roomDetail.room_price}</div>
                        </div>
                    </div>

                    <ContentSlider images={roomImages}/>

                    <div className="room-section facilities ">
                        <div className="container">
                            <div className="section-content">

                            <div className="section-header">
                                <h5>Overview</h5>
                            </div>

                            <p dangerouslySetInnerHTML={{__html : roomDetail.room_desc}} />


                            <div className="sub-section-wrap">

                                <div className="each-sub-section">
                                    <div class="sub-header">
                                        <h5>Room Type: </h5>
                                    </div>
                                    <p className="room-type">{roomDetail.room_type}</p>
                                </div>

                                <div className="each-sub-section">
                                    <div class="sub-header">
                                        <h5>Upto: </h5>
                                    </div>
                                    <p className="person-ico">{roomDetail.max_capacity_adult} {parseInt(roomDetail.extrabedcount )> 0 && <>+ {roomDetail.extrabedcount}</> } Guests</p>
                                </div>

                                <div className="each-sub-section">
                                    <div class="sub-header">
                                        <h5>Room Size: </h5>
                                    </div>
                                    <p className="size-ico">{roomDetail.roomsize}</p>
                                </div>

                                <div className="each-sub-section">
                                    <div class="sub-header">
                                        <h5>Price: </h5>
                                    </div>
                                    <p>₹ {roomDetail.room_price}</p>
                                </div>

                            </div>


                            </div>
                        </div>
                    </div>
                    {roomfacilities.length > 0  &&
                    <section className="content-area text-content">
                        <div className="container">
                            <div className="section-header">
                                <h5>Facilities</h5>
                            </div>
                            <ul className="room-feature-list">
                                {roomfacilities.map(fac =>
                                    <li>{fac.facility}</li>
                                )}

                            </ul>
                        </div>
                    </section>
                    }


                </section>

                }
            </>
        );

    }
}
export default RoomDetail;
