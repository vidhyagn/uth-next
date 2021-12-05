import React from 'react';
import Head from 'next/head'
import Navbar from "../views/Navbar";
import Banner from "../views/Banner";
import Vibe from "../views/Vibe";
import Destination from "../views/Destination";
import Hotels from "../views/Hotels";
import Testimonials from "../views/Testimonials";
import Features from "../views/Features";
import Health from "../views/Health";
import Contact from "../views/Contact";
import Footer from "../views/Footer";
import {connect} from "react-redux";
import * as HotelActions from "../actions/hotel";

class Home extends React.Component{
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  static getInitialProps({ pathname }){
    return { pathname }
  }
  componentDidMount() {
    console.log(this.props.pathname)
    if(this.props.pathname === '/contactus') {
      this.scrollToContact();
    }

  }

  componentDidUpdate(prevProps, prevState, snapshot) {


    if(this.props.pathname !== prevProps.pathname && this.props.pathname === '/contactus') {
      this.scrollToContact();
    }
  }

  scrollToContact = () => {
    var element = document.getElementById("uth-contact");
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  searchHotels = (searchText) => {
    let searchParams = {
      location : searchText
    }
    this.props.searchHotels(searchParams);
  }

  gotoPage = (url, section) => {
    this.props.history.push(url)
  }
  render() {
    return (
        <>
          <Head>
            <meta charSet="UTF-8"/>
            <title>OM VILLAS ,Varanasi| Best Hotels in varanasi| Best price deals luxury hotels in Varanasi| Book your
              stay now</title>
            <meta name="description"
                  content="Om Villas Varanasi accomplishes help you with the best existence of Varanasi with an exceptional methodology towards accommodation. Among one of the best hotels in varansi Om villas provides free wifi,spa, banquet halls, restaurant, bar and swimming pool.Regardless of whether it is a Business Meeting or an occasion ..."/>
            <meta name="keywords"
                  content="best hotels in thekkady, best hotels in kochi, best hotels in munnar, best hotels in bangalore,best hotels in varanasi,best price luxury hotels in kochi "/>
            <meta name="author" content="UTH Group Of Hotels"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="OM VILLAS ,Varanasi| Best Hotels in varanasi| Best price deals luxury hotels in Varanasi| Book your
                stay now" />
            <meta property="og:description" content="Om Villas Varanasi accomplishes help you with the best existence of Varanasi with an exceptional methodology towards accommodation. Among one of the best hotels in varansi Om villas provides free wifi,spa, banquet halls, restaurant, bar and swimming pool.Regardless of whether it is a Business Meeting or an occasion ..." />
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
            <link rel="stylesheet" charSet="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
          </Head>

          <main>
            <div className="wrapper">


              <Navbar/>

              <Banner searchHotels={this.searchHotels.bind(this)}/>

              <Vibe/>

              <Destination/>

              <Hotels/>


              <Testimonials/>

              <Features gotoPage={this.gotoPage}/>


              <Health gotoPage={this.gotoPage}/>

              <Contact/>


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

const mapStateToProps = state => ({
  hotelData:state.HotelReducer.hotelData
});

export default connect(
    mapStateToProps,
    {
      searchHotels : HotelActions.searchHotels
    }
)(Home);