import React from 'react';
import Head from 'next/head'
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";

class Mice extends React.Component{
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
                  <img src="./assets/images/mice-banner.jpg"/>

                  <div className="carousel-text-block">
                    <div className="container">
                      <h1>M.I.C.E</h1>
                    </div>
                  </div>
                </section>

                <div className="content-area text-content">
                  <div className="container">
                    <div className="section-header">
                      <h5>Meeting</h5>
                    </div>
                    <div className="section-content">
                      <p>Stay well-defined, organised and healthy positive here. Connect your colleagues and have a
                        mindful way of holding things together. Get connected by heart!</p>

                      <div className="row">
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/business-meeting.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Business Meeting</h5>
                              <p>We UTH Group of Hotels are happy to provide the best service for your designated
                                Business meetings with international standards. Our experienced team crew will be happy
                                to host and provide ample space for Conference Hall, banquet halls, board rooms and
                                outdoor venues for meetings for any range with all ground handling arrangements
                                including, transportation, tours and many more.</p>
                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/online-meeting.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Virtual Meeting / Online Meeting</h5>
                              <p>Everyone from different geographic locations gathering for physical meetings has now
                                tuned up to virtual meeting spaces. Our experienced team tunes up the virtual meeting
                                space with the latest state of art technology; connecting through the latest software to
                                conduct the meetings, with presentation space, chat private / public, video and audio
                                with unlimited timings as per requirements. We have well-tuned IT team for offering
                                Virtual Meetings
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/confidential-meeting.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Board Room Meetings / Confidential meetings</h5>
                              <p>We are delighted to provide you the confidential / board meeting with best facilities
                                in your preferred destination. Our team will be seamlessly handling the right venues,
                                facilities, dining and accommodation. We have a dedicated team to handle all kind of
                                confidential meetings and they are capable to manage even your last minute requirements
                                during the meeting.</p>
                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/corporate-meeting.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Corporate meeting</h5>
                              <p>According to the character and size of the corporate meeting, we can design whole
                                programme in a very highly professional way. It can be venue, arrangements of meeting
                                (Formal & Informal), cultural shows, team building programme, theme buffets, HI Tea
                                programme, interactions, accommodation, transportation etc.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="room-section">
                  <div className="container">
                    <div className="section-header">
                      <h5>Incentive</h5>
                    </div>
                    <div className="section-content">
                      <p>A meeting event as part of a programme, which is offered to its delegates to reward the result
                        of their targets / performance in general.</p>

                      <div className="row">
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/incentive-sales.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Sales</h5>

                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/incentive-financial.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Financial</h5>

                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/incentive-business.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Business</h5>

                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/incentive-wellness.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Wellness</h5>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content-area text-content">
                  <div className="container">
                    <div className="section-header">
                      <h5>Conference</h5>
                    </div>
                    <div className="section-content">
                      <p>Make your conferences live & confidential within our hotels and resorts. Let your delegates
                        gather here with sprouting thoughts & ideas. Converge your best thoughts!</p>

                      <div className="row">
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/business-conference.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Business</h5>
                              <p>We UTH Group of Hotels are happy to provide the best service for your designated
                                Business meetings with international standards. Our experienced team crew will be happy
                                to host and provide ample space for Conference Hall, banquet halls, ball rooms and
                                outdoor venues for meetings for any range with all ground handling arrangements
                                including, transportation, tours and many more.</p>
                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/seminar.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Seminar</h5>
                              <p>Our team understands the choice of importance of your theme and we delegate the same
                                with utmost care and vision. The meetings hall are equipped with state of art AV
                                facilities. We handle the entire stream of process with delegate arrival in the
                                destination, as well as venue with theme, the audio and visual set up, the dining
                                experience with variety of unique menu with the spectacular beverages, with the best
                                entertainment options.</p>
                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/virtual-meeting.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Virtual Meeting / Online Meeting</h5>
                              <p>Everyone from different geographic locations gathering for physical meetings has now
                                tuned up to virtual meeting spaces. Our experienced team tunes up the virtual meeting
                                space with the latest state of art technology; connecting through the latest software to
                                conduct the meetings, with presentation space, chat private / public, video and audio
                                with unlimited timings as per requirements. We have well-tuned IT team for offering
                                Virtual Meetings </p>
                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/residence-conference.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Residence Conference.</h5>
                              <p>We are delighted to be the host of your conference with accommodation in the right
                                venue. Our choice of excellent dining venue with variety of cuisines, entertainment and
                                many more. According to the choice of range of rooms for accommodation, our team will be
                                glad to offer the right choices. We can provide travel desk, cultural show, cocktail
                                dinners, live star bands. Etc. Our array of options will help you to choose the right
                                mix and match.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="room-section">
                  <div className="container">
                    <div className="section-header">
                      <h5>Events</h5>
                    </div>
                    <div className="section-content">
                      <p>Redefine the best moments of your life, have a splendid go with your events and weddings.
                        Eye-catch perfection and feel the unexpectedness. Go more than just normal!</p>

                      <div className="row">
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/product-launch.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Product Launch</h5>
                              <p>It’s a brand new launch – yes! you are connecting with most sophisticated ‘Team UTH’.
                                We handle the entire stream of process with delegate arrival in the destination, as well
                                as venue with theme, the audio and visual set up, the dining experience with variety of
                                unique menu with the spectacular beverages, with the best entertainment options. We can
                                even provide star nights for product launch. We can assist to arrange press meet during
                                product launch. The venue can either be indoor and outdoor.</p>
                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/corporate-gathering.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Corporate Gathering</h5>
                              <p>Celebrating success mile stones or an annual party for the well-wishers and your
                                employees; Star Award Nights, Fashion Shows, press meet / pharmaceutical or Doctors
                                events – One stop point for vibrant team to handle the same. Our team arrange the total
                                show with the latest state of art Audio and Video, gala dinner, solo entertainers,
                                celebrities, cocktail themes. Additional to the event, we can arrange the travel desk as
                                well as stay in appropriate resorts / hotels.</p>
                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/wedding-events.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Wedding</h5>
                              <p>We understand the need of the life time moment – the wedding – The themes (Hindu,
                                Christian, and Muslim, non-religious, traditional or international), the menu
                                (Traditional, International, fusion and theme buffet), the set-up, the live music, the
                                lightings, the charm, the moments all unique for every wedding. We handle the entire
                                stream of process with the guest’s arrival in the destination, as well as venue with
                                theme, the audio and visual set up, the dining experience with variety of unique menu
                                with the spectacular beverages, with the best entertainment options. We will ensure this
                                event giving ever green memory for not only nuptials, but also for entire team who
                                attend this event. Because our dedicated team will design the event in a charming
                                innovative way.</p>
                            </div>
                          </div>
                        </div>
                        <div className="pin-banner col-md-6">
                          <div className="pintile-content">
                            <figure>
                              <img src="./assets/images/virtual-events.jpg"/>
                            </figure>
                            <div className="pintile-decription">
                              <h5>Virtual Events</h5>
                              <p>Be it an education fair event / brand launching event online – UTH Group is the right
                                choice. Our experienced IT team tunes up the virtual meeting space with the latest state
                                of art technology; connecting through the latest softwares to conduct the meetings, with
                                presentation space, chat private / public, video and audio with unlimited timings as per
                                requirements. We have well-tuned IT team for offering Virtual Meetings.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
export default Mice;