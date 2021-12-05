import React from 'react';
import Head from 'next/head'
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";
import {connect} from "react-redux";
import * as HotelActions from "../actions/hotel";
class Health extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {


  }

  render() {
    return (
        <>
          <Head>
            <meta charSet="UTF-8"/>
            <title>Misty Courtyard by UTH| Best Hotels in Munnar| Boutique hotels at best price| Book your stay
              now</title>
            <meta name="description"
                  content="Munnar is granted with nature pays such delight and draws amazingly diverse travelers to its coop. The misty courtyard is one of the best hotels in munnar provides all facities and delicious food.It has so many unique attractions and accompanying by non-stop mist."/>
            <meta name="keywords"
                  content="best hotels in thekkady, best hotels in kochi, best hotels in munnar, best hotels in banglore,best hotels in varanasi,best price luxury hotels in kochi "/>
            <meta name="author" content="UTH Group Of Hotels"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Misty Courtyard by UTH| Best Hotels in Munnar| Boutique hotels at best price| Book your stay
              now" />
            <meta property="og:description" content="Munnar is granted with nature pays such delight and draws amazingly diverse travelers to its coop. The misty courtyard is one of the best hotels in munnar provides all facities and delicious food.It has so many unique attractions and accompanying by non-stop mist." />
            <meta property="og:url" content="%PUBLIC_URL%" />
            <meta property="og:site_name" content="UTH | Group of Hotels" />
            <meta property="og:image" content="http://159.65.153.59/site/assets/images/fav/og-image.jpg" />
            <meta name="twitter:card" content="http://159.65.153.59/site/assets/images/fav/og-image.jpg" />
            <link rel="apple-touch-icon" sizes="57x57" href="/assets/images/fav/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/fav/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/fav/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/fav/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/fav/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/fav/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/fav/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/fav/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/fav/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/fav/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/fav/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/fav/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/fav/favicon-16x16.png" />
            <meta name="msapplication-TileImage" content="/assets/images/fav/ms-icon-144x144.png" />
            <meta name="twitter:title" content="UTH | Group of Hotels" />

          </Head>

          <main>
            <div className="wrapper">
              <div className="inner-page listing">

                <Navbar/>

                <section className="details-banner-block image-shade">
                  <img src="./assets/images/hl-banner.jpg"/>

                  <div className="carousel-text-block">
                    <div className="container">
                      <h1>Health & Lifestyle</h1>
                    </div>
                  </div>
                </section>

                <section className="room-section no-gap">
                  <div className="container">
                    <div className="each-hotel-category">
                      <figure>
                        <img src="./assets/images/yoga.jpg"/>
                      </figure>
                      <div className="hotel-category-description">
                        <h5>Yoga</h5>
                        <p>Witness and practice the ascetic way of building a spiritual, mental and physical way of
                          life. Our Ayurveda Resorts offers the best path for your life, discovering oneness and
                          self-rhythm.</p>
                      </div>
                    </div>

                    <div className="each-hotel-category">
                      <figure>
                        <img src="./assets/images/medical.jpg"/>
                      </figure>
                      <div className="hotel-category-description">
                        <h5>Medical Tourism</h5>
                        <p>Travel and move your comfort for medical attention within our top-notch resorts furnishing
                          the medical sound. Feel the relaxed way of treatments & stay healthy rich by going greener
                          with your life.</p>
                      </div>
                    </div>

                    <div className="each-hotel-category">
                      <figure>
                        <img src="./assets/images/ayurveda.jpg"/>
                      </figure>
                      <div className="hotel-category-description">
                        <h5>Ayurveda</h5>
                        <p>Go back to the ancient roots of Ayurveda living within our hotels and resorts, unlocking a
                          rejuvenated and fresh appeal to your inner body and soul. The best treatments and packages are
                          here.</p>
                      </div>
                    </div>

                    <div className="each-hotel-category">
                      <figure>
                        <img src="./assets/images/meditation.jpg"/>
                      </figure>
                      <div className="hotel-category-description">
                        <h5>Meditation</h5>
                        <p>Focus your minds on a particular activity, object or thought, creating a mindful state of
                          life. Know your inner essence by unlocking our resort culture that can bring the practises
                          right towards you.</p>
                      </div>
                    </div>

                    <div className="each-hotel-category">
                      <figure>
                        <img src="./assets/images/dental.jpg"/>
                      </figure>
                      <div className="hotel-category-description">
                        <h5>Dental Tourism</h5>
                        <p>Journey the trails and approach the best holdings of UTH Hospitality Group, providing dental
                          diagnostics. Pick your top dental care solutions without a turn back. Have the best smile of
                          your life.</p>
                      </div>
                    </div>

                  </div>
                </section>

                <Footer/>

              </div>


              <a id="back-to-top" href="#" className="back-to-top">
                <span className="top"></span>
              </a>

            </div>
          </main>
          </>
    )
  }
}

export default Health;