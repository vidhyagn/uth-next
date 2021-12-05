import React from 'react';
import Head from 'next/head'
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";
import {connect} from "react-redux";
import * as HotelActions from "../actions/hotel";
import Link from "next/link";
import CategoryBlock from "../views/CategoryBlock";
class HotelCategory extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            hotelCategoryList :[]
        }
    }

    componentDidMount() {
        this.getHotelCategoryList()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.hotelData.categoryList !== prevProps.hotelData.categoryList) {
            this.setState({
                hotelCategoryList : this.props.hotelData.categoryList
            })
        }
    }

    getHotelCategoryList =()=>{
        this.props.getHotelCategoryList();
    }

    render() {
        let hotelCategoryList = this.state.hotelCategoryList || []

        return (
            <>
                <Head>
                    <meta charSet="UTF-8" />
                    <title>Sugar by UTH| Best Hotels in Kochi| Best deals at Sugar Business hotel Kochi
                            </title>
                    <meta name="description"
                    content="The tourism is in full swing for the God’s own country and the best hotels in Kochi are also ready to welcome the guests. The Sugar hotel in Kochi is a prestigious one in this list whose location itself is significant.UTH is the leading brand in the hotel business that is running many hotels and resorts all over the country and out of the country too such as Sri Lanka, Dubai and Maldives." />
                    <meta name="keywords"
                    content="best hotels in thekkady, best hotels in kochi, best hotels in munnar, best hotels in banglore,best hotels in varanasi,best price luxury hotels in kochi " />
                    <meta name="author" content="UTH Group Of Hotels" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Sugar by UTH| Best Hotels in Kochi| Best deals at Sugar Business hotel Kochi" />
                    <meta property="og:description" content="The tourism is in full swing for the God’s own country and the best hotels in Kochi are also ready to welcome the guests. The Sugar hotel in Kochi is a prestigious one in this list whose location itself is significant.UTH is the leading brand in the hotel business that is running many hotels and resorts all over the country and out of the country too such as Sri Lanka, Dubai and Maldives." />
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
                        <div className="inner-page">

                            <Navbar/>

                            <section className="details-banner-block image-shade">
                                <img src="./assets/images/banner-three.jpg"/>

                                <div className="carousel-text-block">
                                    <div className="container">
                                        <h1>HOTELS & RESORTS</h1>
                                    </div>
                                </div>
                            </section>
                            <div className="anchor-block">
                                <div className="container">
                                    {hotelCategoryList.map((cat, index) =>
                                        <>
                                            <Link href={`/hotels/${cat.id}`}>{cat.keyword}</Link>
                                            {index < hotelCategoryList.length - 1 &&
                                            <>|</>
                                            }
                                        </>
                                    )}
                                </div>
                            </div>

                            <section className="room-section">
                                <div className="container">
                                    {hotelCategoryList.map(cat =>
                                        <CategoryBlock item={cat}/>
                                    )}


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

const mapStateToProps = state => ({
    hotelData:state.HotelReducer.hotelData
});

export default connect(
    mapStateToProps,
    {
        getHotelCategoryList : HotelActions.getHotelCategoryList
    }
)(HotelCategory);