import React, { Component,Suspense, lazy } from 'react';
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";

class HealthLifestyle extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {

        return (
            <div className="wrapper">
                <div className="inner-page listing">

                    <Navbar />                   

                    <section className="details-banner-block image-shade">
                        <img src="./assets/images/hl-banner.jpg" />

                        <div class="carousel-text-block">
                            <div class="container">
                                <h1>Health & Lifestyle</h1>
                            </div>
                        </div>
                    </section>

                    <section class="room-section no-gap">
                        <div class="container">
                            <div class="each-hotel-category">
                                <figure>
                                    <img src="./assets/images/yoga.jpg"/>
                                </figure>
                                <div class="hotel-category-description">
                                    <h5>Yoga</h5>
                                    <p>Witness and practice the ascetic way of building a spiritual, mental and physical way of life. Our Ayurveda Resorts offers the best path for your life, discovering oneness and self-rhythm.</p>
                                </div>
                            </div>

                            <div class="each-hotel-category">
                                <figure>
                                    <img src="./assets/images/medical.jpg"/>
                                </figure>
                                <div class="hotel-category-description">
                                    <h5>Medical Tourism</h5>
                                    <p>Travel and move your comfort for medical attention within our top-notch resorts furnishing the medical sound. Feel the relaxed way of treatments & stay healthy rich by going greener with your life.</p>
                                </div>
                            </div>

                            <div class="each-hotel-category">
                                <figure>
                                    <img src="./assets/images/ayurveda.jpg"/>
                                </figure>
                                <div class="hotel-category-description">
                                    <h5>Ayurveda</h5>
                                    <p>Go back to the ancient roots of Ayurveda living within our hotels and resorts, unlocking a rejuvenated and fresh appeal to your inner body and soul. The best treatments and packages are here.</p>
                                </div>
                            </div>

                            <div class="each-hotel-category">
                                <figure>
                                    <img src="./assets/images/meditation.jpg"/>
                                </figure>
                                <div class="hotel-category-description">
                                    <h5>Meditation</h5>
                                    <p>Focus your minds on a particular activity, object or thought, creating a mindful state of life. Know your inner essence by unlocking our resort culture that can bring the practises right towards you.</p>
                                </div>
                            </div>

                            <div class="each-hotel-category">
                                <figure>
                                    <img src="./assets/images/dental.jpg"/>
                                </figure>
                                <div class="hotel-category-description">
                                    <h5>Dental Tourism</h5>
                                    <p>Journey the trails and approach the best holdings of UTH Hospitality Group, providing dental diagnostics. Pick your top dental care solutions without a turn back. Have the best smile of your life.</p>
                                </div>
                            </div>

                        </div>
                    </section>                    

                    <Footer />

                </div>



                <a id="back-to-top" href="#" className="back-to-top">
                    <span className="top"></span>
                </a>

            </div>
        );
    }
}


export default HealthLifestyle;
