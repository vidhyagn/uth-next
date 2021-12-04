import React from "react";
function Features(Props) {
    return (
        <section className="content-area features">
            <div className="container">
                <div className="content-inner-wrap">

                    <div className="grid-box">
                        <div className="left-grid">
                            <nav className="each-grid wedding-tour image-gradient" onClick={()=>Props.gotoPage('/mice','wedding')}>
                                <div className="header-text">
                                    <h5>Wedding Tourism</h5>

                                </div>

                                <div className="description-text">
                                    <p>Unleash your wedding desires by having the right touch of destines, making it something to cherish for a lifetime. Let the moment fill with luxury, grace and rhythmic swing within our 5-star hotels and resorts. </p>
                                </div>
                            </nav>
                        </div>
                        <div className="right-grid">
                            <nav className="each-grid" onClick={()=>Props.gotoPage('/mice','wedding')}>
                                <span className="hand-ico"></span>
                                <h5>Meeting</h5>
                                <p>Stay well-defined, organised and healthy positive here. Connect your colleagues and have a mindful way of holding things together. Get connected by heart!</p>
                            </nav>
                            <nav className="each-grid" onClick={()=>Props.gotoPage('/mice','incentive')}>
                                <span className="globe-ico"></span>
                                <h5>Incentive</h5>
                                <p>A meeting event as part of a programme, which is offered to its delegates to reward the result of their targets / performance in general.</p>
                            </nav>
                            <nav className="each-grid" onClick={()=>Props.gotoPage('/mice','conf')}>
                                <span className="group-ico"></span>
                                <h5>Conference</h5>
                                <p>Make your conferences live & confidential within our hotels and resorts. Let your delegates gather here with sprouting thoughts & ideas. Converge your best thoughts!</p>
                            </nav>
                            <nav className="each-grid" onClick={()=>Props.gotoPage('/mice','events')}>
                                <span className="map-ico"></span>
                                <h5>Events</h5>
                                <p>Redefine the best moments of your life, have a splendid go with your events and weddings. Eye-catch perfection and feel the unexpectedness. Go more than just normal!</p>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Features;