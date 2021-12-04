import React from 'react';
import Head from 'next/head'
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";
class PositiveVibe extends React.Component{
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
            <meta charSet="UTF-8" />
            <title>Tiger's Roare by UTH| Best Hotels in Thekkady| Best price luxury hotels in Thekkady| Jungle view
            rooms. Book your rooms now
            </title>
            <meta name="description"
            content="UTH Tigers Roare is one of the best hotels in Thekkady that provide the best hospitality and comfort with a luxury ambience. The resort is located in the town itself and near to the famous ‘Periyar Tiger reserve’.Book your stay now" />
            <meta name="keywords"
            content="best hotels in thekkady, best hotels in kochi, best hotels in munnar, best hotels in banglore,best hotels in varanasi,best price luxury hotels in kochi " />
            <meta name="author" content="UTH Group Of Hotels" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Head>

          <main>
            <div className="wrapper">
              <div className="inner-page">

                <Navbar/>

                <section className="details-banner-block image-shade">
                  <img src="./assets/images/vibe-detail.jpg"/>

                  <div className="carousel-text-block">
                    <div className="container">
                      <h1>POSITIVE VIBE OF US</h1>
                    </div>
                  </div>
                </section>

                <section className="content-area text-content">
                  <div className="container">

                    <div className="content-header">
                      <h1>LINGER TO YOUR UNTOUCHED AND EXPLICIT</h1>
                      <h3>DESTINY OF HOTELS AND RESORTS</h3>
                    </div>

                    <div className="each-sub-content">
                      <h5>THE CONCEPT</h5>
                      <p>Under the unique umbrella of UTH Group, we furnish our most welcomed guests with a blend of
                        sheer stay of comfort and leisure offerings to your great time. Our vision stays crystal clear
                        to offer the most desirable and destined stay under our best class hotels with a feeling of
                        oneness.
                        We nourish pure responsible and sustainable way to accommodate your pleasure and opulence of
                        stay, striving to create peaceful longings with every precious visits. Redefine and reinvent
                        your stay with UTH group of hotels making the best out of your time not just with the soothing
                        feel of stay but with all delicate offerings from the best in business.
                      </p>
                    </div>

                    <div className="each-sub-content">
                      <h5>WHO WE ARE</h5>
                      <p>Our promoters are the leaders of current Hotel and Tourism sectors adjoined with a worthy
                        expertise of more than 25 years within the industries. We take care your dream of explicit touch
                        of staying comforts with UTH group of hotels towards the leisure getaways and recreational
                        activities of your choice.We value your time more than anything else and guides with all your
                        prerequisites of the visit accomplished.</p>
                    </div>

                    <div className="each-sub-content">
                      <h5>Responsible and sustainable Tourism that we foster</h5>
                      <p>Every customer adds a genuine value to our hotels and resorts with their long lasting memories
                        and footprints. Being your prime providers of comfort under our exclusive untouched hotel and
                        resort packages, we focus on bringing responsible and sustainable way of living towards you. The
                        luxury in suits and delicacy in cuisines is met with sustainable use of traditional forms of
                        living that enhances the rich culture of our hotels. Going greener and greener to the available
                        resources and making the place eco-friendly gluing with the art and culture of ethnic tradition
                        marks the highlight with warmth and worth in stay.</p>
                    </div>

                    <div className="each-sub-content">
                      <h5>EXCLUSIVE SERVICES</h5>
                      <p>We focus not the usual way, but the exploring way of travel with accommodation. Your memory
                        should not be confined to mere staying – “there is always a dusk to explore after the dawn of
                        comfort”</p>
                    </div>


                    <div className="each-sub-content">
                      <h5>Heritage Tourism</h5>
                      <p>Who doesn’t like to feel our rich culture and tradition with the best stay offered?
                        We have our stands established with getaway hotels to witness many places of historical
                        importance. Heritage tourism routes back to our past culture and the people left behind with the
                        modern civilizations overpowering them. Glance to the historical importance of varied stay and
                        culture with our Heritage tourism.</p>
                    </div>

                    <div className="each-sub-content">
                      <h5>Ayurveda Tourism</h5>
                      <p>Resort to the Ayurveda rhythm of life..
                        Fall in love with our Ayurveda Tourism package that could explore the very inner you by
                        providing peaceful necessities of life. We make sure your perfect surrounding meets the
                        tranquility of nature in all aspects. We indulge to provide the best array of treatments and
                        programmes of Ayurveda within the best hotels and resorts of your choice with sheer comfort of
                        stay.</p>
                    </div>

                    <div className="each-sub-content">
                      <h5>Companion Tourism</h5>
                      <p>A new initiation to our worldwide guests
                        Pick your luxurious and splendid hotels and get a free guide to your favourite reaches without a
                        chance of worry. All your handpicked places and beautiful sightings comes closer with an expert
                        assist who can traverse your marvellous way ahead. Every place hides its thing of beauty and
                        there are few people who can take you deep to the explicit offerings. Get in touch with our
                        companion tourism to explore the untouched and hidden way ahead.</p>
                    </div>

                    <div className="each-sub-content">
                      <h5>Wedding Tourism</h5>
                      <p>Adventure your romantic getaway destines
                        Never doubt with your favourite post wedding hideout as long as we are here with you. Sink into
                        our magical hotels and resorts of pure delight and cosy ambience that can make you sink into
                        your own world of joy with marvellous offerings of pleasure. We provide you the best elusive
                        honeymoon packages that could make you cherish the very beginning of your couple life.
                      </p>
                    </div>

                  </div>
                </section>

              </div>

              <Footer/>

              <a id="back-to-top" href="#" className="back-to-top">
                <span className="top"></span>
              </a>

            </div>
          </main>
          </>
    )
  }
}

export default PositiveVibe;