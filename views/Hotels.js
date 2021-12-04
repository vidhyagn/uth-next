import React from "react";
import ContentSlider from "./common/Slider";
import Link from 'next/link';

function Hotels(){
    return(
        <section className="content-area hotels-block">


            <div className="hotel-resort-wrpper">

                <ContentSlider />

                <div className="boiler-content slander">
                        <div className="section-header">
                            <h5>HOTELS & RESORTS</h5>
                        </div>
                        <p>Witness the jewels under UTH Group that glitter the land, gleaming lights of comfort. We present before your eyes the perfect destines beyond the hotel definitions that can redefine all your previous concepts. A new culture is what we shoot at, gelling and linking people’s desires towards having the best choice of hotels and resorts under the unique umbrella.</p>
                        <div className="button-block">
                            <Link href={"/hotels-category"}>
                                <button className="general-btn" >Read more</button>
                            </Link>
                        </div>
                    </div>
                
            </div>
        </section>
    )
}
export default Hotels;

