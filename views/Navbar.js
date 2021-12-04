import React, {Component, useState} from "react";
import Link from 'next/link';
import {connect} from "react-redux";
import {BASE_PATH} from '../constants/index';
import * as HotelActions from "../actions/hotel";
class Navbar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            mobileMenu : false,
            searchText : ''
        }
    }

    componentDidMount() {


    }

    setMobileMenu = () => {
        this.setState({
            mobileMenu : !this.state.mobileMenu
        })
    }
    setSearchText = (searchText) => {
        this.setState({
            searchText : searchText
        })
    }

    handleChange =(e) => {
        let fieldVal = e.target.value;
        this.setSearchText(fieldVal)
    }

    handleKeyUp = (e) => {
        var code = (e.keyCode ? e.keyCode : e.which);

        if(code == 13) { //Enter keycode
            //Props.searchHotels(searchText);
            let searchParams = {
                location : this.state.searchText
            }
            this.props.searchHotels(searchParams);

        }
    }

    render() {
            return(
                <div className="nav-bar">
                    <div className="container">
                        <div className="nav-bar-container">

                            <Link href="/">
                                <a className="brand-logo">
                                    <img src="/assets/images/uth-logo.png" alt="Brand-logo" className="white-logo"/>

                                </a>
                            </Link>

                            <div className="nav-right">

                                <div className={`menu-wrapper ${this.state.mobileMenu ? ' fly-in' : ''}`}>
                                    <button className="close-fly" onClick={() => this.setMobileMenu(false)}></button>
                                    <ul className="nav-menu">
                                        <li>
                                            <Link href="/"><nav>HOME</nav></Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us"><nav>POSITIVE VIBE OF US</nav></Link>
                                        </li>
                                        <li>
                                            <Link href="/hotels-category"><nav>HOTELS & RESORTS</nav></Link>
                                        </li>

                                        <li>
                                            <Link href="/mice"><nav>MICE</nav></Link>
                                        </li>
                                        <li>
                                            <Link href="/health"><nav>HEALTH & LIFE STYLE</nav></Link>
                                        </li>
                                        <li>
                                            <Link href="/contactus"><nav>KEEP IN TOUCH</nav></Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="search-block">
                                    <input type="text" name="search_loc" id="search_loc" placeholder="Search"
                                           onKeyUp={(e)=> this.handleKeyUp(e)}
                                           onChange={(e) => this.handleChange(e)}/>

                                </div>

                                <button className="hamburger" onClick={() => this.setMobileMenu(true)}></button>

                            </div>


                        </div>
                    </div>
                </div>
            )
    }

}
const mapStateToProps = state => ({
    hotelData:state.HotelReducer.hotelData
});
// export default  withRouter(connect(mapStateToProps, {
//     searchHotels : HotelActions.searchHotels
// })(Navbar));

export default connect(
    mapStateToProps,
    {
        searchHotels : HotelActions.searchHotels
    }
)(Navbar);
