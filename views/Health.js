import React from "react";
function Health(Props) {
    return (
        <section className="content-area life">
            <div className="container">
                <div className="content-inner-wrap">

                    <div className="section-header text-right">
                        <h5>Health & Life Style</h5>
                    </div>

                    <div className="grid-box">
                        <nav className="each-grid-box meditation">

                        </nav>
                        <nav className="each-grid-box" onClick={()=>Props.gotoPage('/health','yoga')}>
                            <h5>Yoga</h5>
                            <p>Witness and practice the ascetic way of building a spiritual, mental and physical way of life. Our Ayurveda Resorts offers the best path for your life, discovering oneness and self-rhythm.</p>
                        </nav>
                        <nav className="each-grid-box" onClick={()=>Props.gotoPage('/health','medical')}>
                            <h5>Medical Tourism</h5>
                            <p>Travel and move your comfort for medical attention within our top-notch resorts furnishing the medical sound. Feel the relaxed way of treatments & stay healthy rich by going greener with your life.</p>
                        </nav>
                        <nav className="each-grid-box" onClick={()=>Props.gotoPage('/health','ayurveda')}>
                            <h5>Ayurveda</h5>
                            <p>Go back to the ancient roots of Ayurveda living within our hotels and resorts, unlocking a rejuvenated and fresh appeal to your inner body and soul. The best treatments and packages are here.</p>
                        </nav>
                        <nav className="each-grid-box" onClick={()=>Props.gotoPage('/health','meditation')}>
                            <h5>Meditation</h5>
                            <p>Focus your minds on a particular activity, object or thought, creating a mindful state of life. Know your inner essence by unlocking our resort culture that can bring the practises right towards you.</p>
                        </nav>
                        <nav className="each-grid-box" onClick={()=>Props.gotoPage('/health','dental')}>
                            <h5>Dental Tourism</h5>
                            <p>Journey the trails and approach the best holdings of UTH Hospitality Group, providing dental diagnostics. Pick your top dental care solutions without a turn back. Have the best smile of your life.</p>
                        </nav>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Health;