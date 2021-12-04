import React, {useState} from "react";
import Link from 'next/link';

function HotelNavbar(Props){
    const [mobileMenu, setMobileMenu] = useState(false);
    const [searchText, setSearchText] = useState('');

    function handleChange(e) {
        let fieldVal = e.target.value;
        setSearchText(fieldVal)
    }

    function handleKeyUp(e) {
        var code = (e.keyCode ? e.keyCode : e.which);


        if(code == 13) { //Enter keycode
            Props.searchHotels(searchText)
        }
    }

    return(
        <div className="nav-bar">
            <div className="container">
                <div className="nav-bar-container">

                    <Link href="/home" className="brand-logo">
                        <img src="../assets/images/uth-logo.png" alt="Brand-logo" className="white-logo"/>
                    </Link>

                    <div className="nav-right">

                        <div className={`menu-wrapper ${mobileMenu ? ' fly-in' : ''}`}>
                            <button className="close-fly" onClick={() => setMobileMenu(false)}></button>
                            <ul className="nav-menu">
                                <li>
                                    <Link href="/"><nav>HOME</nav></Link>
                                </li>
                                <li>
                                    <nav onClick={() => Props.scrollToSection('hotel-overview')}>OVERVIEW</nav>
                                </li>
                                <li>
                                    <nav onClick={() => Props.scrollToSection('hotel-rooms')}>ROOMS</nav>
                                </li>
                                <li>
                                    <nav onClick={() => Props.scrollToSection('hotel-facilities')}>FACILTIES</nav>
                                </li>
                                <li>
                                    <nav onClick={() => Props.scrollToSection('hotel-gallery')}>GALLERY</nav>
                                </li>
                            </ul>
                        </div>

                        <div className="search-block">
                            <input type="text" name="search_loc" id="search_loc" placeholder="Search"
                                   onKeyUp={(e)=> handleKeyUp(e)}
                                   onChange={(e) => handleChange(e)}/>

                        </div>

                        <button className="hamburger" onClick={() => setMobileMenu(true)}></button>

                    </div>


                </div>
            </div>
        </div>
    )
}
export default HotelNavbar;
