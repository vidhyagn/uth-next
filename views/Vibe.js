import React from "react";
import Link from 'next/link';
function Vibe() {

    return (
        <section className="content-area vibe">
            <div className="boiler-content slander">
                <h5>POSITIVE VIBE OF US</h5>
                <p>Get absorbed & hooked to the fire wings of UTH Hospitality, where your dream Hotels and Resorts can bloom under safer hands. We are the pledged expertise from the land known as 'Queen of Arabia', Cochin. Let the rays of prosperity touch your business aspires, evoking the best support of pioneer hands in the Hotel and Tourism sphere. We nourish a pure, responsible & sustainable way to accommodate the pleasure & opulence of stay within our unique umbrella of hotels, creating peaceful comfort longings & redefining travel desires.</p>
                <div className="button-block">
                    <Link href={"/about-us"}>
                        <button className="general-btn" >Read more</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Vibe;
