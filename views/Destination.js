import React from "react";
import Link from 'next/link';
function Destination() {

    return (
        <section className="content-area destination">
    <div className="boiler-content dark slander rev">
        <h5>DESTINATION & EXPERIENCES</h5>


        <p>Kerala is rich in some explicit destinations to elate and prolong the best holiday times. Be it a foreign or else a domestic traveller, Kerala destinations have shown the magnetic charm, hue and fragrance at its peak. The natural wheeze of rhythmic air and cultural sightings can contrast the yells of people. Parting away from the hustle city life, walk through the cultural and traditional paths, going greener to the thicket & delving to the water reflections, pointing the rich experience that we furnish under the professional group of hotel undertakings.</p>
        <div className="button-block">
            <Link href={"/hotels-category"}>
                <button className="general-btn" >Read more</button>
            </Link>
        </div>
    </div>
</section>
    )
}
export default Destination;