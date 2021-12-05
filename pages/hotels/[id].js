import React, {Component, useEffect, lazy, useState} from 'react';
import {connect} from "react-redux";
import Navbar from "../../views/Navbar";
import Footer from "../../views/Footer";
import LeftPanel from "../../views/LeftPanel";
import Link from "next/link";
import HotelBlock from "../../views/HotelBlock";
import * as HotelActions from "../../actions/hotel"
import {getUrlSegment} from "../../utilities/CustomFunctions";
import {IMAGE_PATH, API_PATH} from "../../constants";
import { withRouter } from 'next/router'
import {hotel} from "../../services/hotel.services";
import {getFacilities} from "../../actions/hotel";
import Head from "next/head";



//This gets called every time the page is called
export async function getServerSideProps(context) {
    const {params} = context;
    const {id} = params;
    const response = await fetch(`${API_PATH}hotel/hotellist?category=${id}`);
    const res = await response.json();

    return {
        props : {
            hotelList: res.results ? res.results.data: [],
            categoryInfo : res.results.category
        }
    }

}

const HotelList = ({ hotelList, categoryInfo }) => {
    const [facilities, setfacilities] = useState([])
    const [showFilterStatus, setshowFilterStatus] = useState(false);
    let total = hotelList.length;

    useEffect(() => {
        // Always do navigations after the first render
        getFacilities();
    }, []);

    async function getFacilities() {
        let fresponse = await fetch(`${API_PATH}"hotel/masterfacilities`);
        let fres = await fresponse.json();
        setfacilities(fres.results ? fres.results.data : []);

    }
   // const router = useRouter();

    function searchHotels() {
       // this.props.searchHotels();
    }

    function showFilters(){
        setshowFilterStatus(true)

        // this.setState({
        //     showFilterStatus : true
        // })
    }

    function hideFilters(){
        setshowFilterStatus(false)
        //     showFilterStatus : false
        // })
    }

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Sugar by UTH| Best Hotels in Kochi| Best deals at Sugar Business hotel Kochi</title>
                <meta name="description"
                      content="The tourism is in full swing for the God’s own country and the best hotels in Kochi are also ready to welcome the guests. The Sugar hotel in Kochi is a prestigious one in this list whose location itself is significant.UTH is the leading brand in the hotel business that is running many hotels and resorts all over the country and out of the country too such as Sri Lanka, Dubai and Maldives." />
                <meta name="keywords"
                      content="best hotels in thekkady, best hotels in kochi, best hotels in munnar, best hotels in banglore,best hotels in varanasi,best price luxury hotels in kochi "/>
                <meta name="author" content="UTH Group Of Hotels" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Sugar by UTH| Best Hotels in Kochi| Best deals at Sugar Business hotel Kochi"  />
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
                    <div className="inner-page listing">

                        <Navbar/>

                        <section className="details-banner-block image-shade">
                            {categoryInfo && categoryInfo.thumb && categoryInfo.thumb !== '' &&
                            <img src={`${IMAGE_PATH + 'category/' + categoryInfo.thumb}`}/>
                            }
                            {(!categoryInfo || !categoryInfo.thumb || categoryInfo.thumb === '') &&
                            <img src="../assets/images/banner.jpg"/>
                            }


                            <div className="carousel-text-block">
                                <div className="container">
                                    <h1>{categoryInfo.category}</h1>
                                </div>
                            </div>
                        </section>


                        <div className="listing-wrapper">

                            <LeftPanel facilities={facilities} searchHotels={searchHotels}
                                       showFilterStatus={showFilterStatus}
                                       hideFilters={hideFilters}/>
                            <div className="listing-content">

                                <div className="listing-content-header">
                                    <h5>HOTELS & RESORTS</h5>

                                    <div className="listing-content-header-right">
                                        <p className="font-bold">{hotelList.length} Hotels found</p>
                                        <button className="filter" onClick={() => showFilters()}></button>
                                    </div>
                                </div>
                                {hotelList.length > 0 &&
                                <div className="content-lister">
                                    {hotelList.map((hotel, index) =>
                                        <HotelBlock detail={hotel}/>
                                    )}
                                    {hotelList.length < total &&
                                    <div className="loadmore-block">
                                        <Link href={"/hotel-detail"}>
                                            <nav>Load more</nav>
                                        </Link>
                                    </div>
                                    }

                                </div>
                                }
                                {hotelList.length === 0 &&
                                <div className="coming-soon-wrapper">
                                    <h1>Hotels will be added Soon</h1>
                                </div>
                                }
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


    );
};
export default HotelList;
// class HotelList extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             hotelList : props.hotelList,
//             searchTexts : [],
//             facilities : [],
//             showFilterStatus : false,
//             category : {}
//         }
//
//     }
//
//     componentDidMount() {
//
//         this.getFacilities();
//         //this.getHotelList()
//         this.setState({
//             hotelList : this.props.hotelList
//         })
//
//
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//         if(this.props.hotelData.hotelList !== prevProps.hotelData.hotelList) {
//             let hotelList = this.props.hotelData.hotelList;
//             console.log(hotelList)
//             hotelList = hotelList.map(item => {
//                 let facilities =  item.facilities ? item.facilities : [];
//                 facilities = facilities.map((fac,index) => {
//                         if (fac.facility_id === 1) {
//                             fac.class = 'pool-ico';
//                         }
//                         else if (fac.facility_id === 2) {
//                             fac.class = 'wifi-ico';
//                         }
//                         else if (fac.facility_id === 3) {
//                             fac.class = 'family-ico';
//                         }
//                         else if (fac.facility_id === 4) {
//                             fac.class = 'parking-ico';
//                         }
//                         else if (fac.facility_id === 5) {
//                             fac.class = 'spa-ico';
//                         }
//                         else if (fac.facility_id === 6) {
//                             fac.class = 'restaurant-ico';
//                         }
//                         else if (fac.facility_id === 7) {
//                             fac.class = 'fitness-ico';
//                         }
//                         else if (fac.facility_id === 8) {
//                             fac.class = 'beach-ico';
//                         }
//                         return fac;
//                     }
//                 )
//                 item.facilities = facilities;
//                 return item;
//             });
//             this.setState({
//                 hotelList : hotelList
//             })
//         }
//         if(this.props.hotelData.category !== prevProps.hotelData.category) {
//             let category = this.props.hotelData.category;
//             this.setState({
//                 category : category
//             })
//         }
//         if(this.props.facilityData.facilities !== prevProps.facilityData.facilities) {
//             let facilities = this.props.facilityData.facilities;
//
//             this.setState({
//                 facilities : this.props.facilityData.facilities
//             })
//         }
//     }
//
//     getHotelList =()=>{
//
//         let category_id = id;
//         let params = {}
//         if(category_id) {
//             params = {category : category_id};
//
//         }
//         this.props.hotelList(params);
//     }
//
//     getFacilities =()=>{
//         this.props.getFacilities()
//     }
//
//     searchHotels = () => {
//         this.props.searchHotels();
//     }
//
//     showFilters = () => {
//         this.setState({
//             showFilterStatus : true
//         })
//     }
//
//     hideFilters = () => {
//         this.setState({
//             showFilterStatus : false
//         })
//     }
//
//     render() {
//         let hotelList = this.props.hotelList || [];
//         let categoryInfo = this.state.category || {};
//         let facilities = this.state.facilities || [];
//         let total = hotelList.length;
//         //hotelList =hotels;
//         console.log(hotelList)
//         const { id } = this.props.router.query;
//         return (
//             <div className="wrapper">
//                 <div className="inner-page listing">
//
//                     <Navbar />
//
//                     <section className="details-banner-block image-shade">
//                         {categoryInfo && categoryInfo.thumb && categoryInfo.thumb !== '' &&
//                         <img src={`${IMAGE_PATH + 'category/' + categoryInfo.thumb}`}/>
//                         }
//                         {(!categoryInfo || !categoryInfo.thumb || categoryInfo.thumb === '') &&
//                         <img src="../assets/images/banner.jpg"/>
//                         }
//
//
//                         <div class="carousel-text-block">
//                             <div class="container">
//                                 <h1>{categoryInfo.category}</h1>
//                             </div>
//                         </div>
//                     </section>
//
//
//                     <div className="listing-wrapper">
//
//                         <LeftPanel facilities={facilities} searchHotels={this.searchHotels} showFilterStatus = {this.state.showFilterStatus}
//                                    hideFilters={this.hideFilters}/>
//                         <div className="listing-content">
//
//                             <div className="listing-content-header">
//                                 <h5>HOTELS & RESORTS</h5>
//
//                                 <div className="listing-content-header-right">
//                                     <p className="font-bold">{hotelList.length} Hotels found</p>
//                                     <button className="filter" onClick={() => this.showFilters()}></button>
//                                 </div>
//                             </div>
//                             {hotelList.length > 0 &&
//                             <div className="content-lister">
//                                 {hotelList.map((hotel, index) =>
//                                     <HotelBlock detail={hotel}/>
//                                 )}
//                                 {hotelList.length < total &&
//                                 <div className="loadmore-block">
//                                     <Link href={"/hotel-detail"}>
//                                         <nav>Load more</nav>
//                                     </Link>
//                                 </div>
//                                 }
//
//                             </div>
//                             }
//                             {hotelList.length === 0 &&
//                             <div className="coming-soon-wrapper">
//                                 <h1>Hotels will be added Soon</h1>
//                             </div>
//                             }
//                         </div>
//
//                     </div>
//
//                     <Footer />
//
//                 </div>
//
//                 <a id="back-to-top" href="#" className="back-to-top">
//                     <span className="top"></span>
//                 </a>
//
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = state => ({
//     hotelData:state.HotelReducer.hotelData,
//     facilityData:state.HotelReducer.facilityData
// });
//
// export default withRouter(connect(
//     mapStateToProps,
//     {
//         hotelList : HotelActions.getHotelList,
//         getFacilities : HotelActions.getFacilities,
//         searchHotels : HotelActions.searchHotels
//     }
// )(HotelList));

