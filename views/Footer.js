import React from "react";
function Footer() {
    return (
        <footer className="footer-block">
    <div className="container">
        <div className="footer-inner">

            <div className="footer-left">
                <a href="#" className="brand-logo">
                    <img src="/assets/images/uth-logo-black.png" alt="Brand-logo" />
                </a>
                <div className="footer-address">
                    <p>Vrindhavan</p>
                    <p>Mavelipuram Colony</p>
                    <p>Kakkanadu P.O.</p>
                    <p>Kochi 30</p>
                </div>
            </div>

            <ul className="other-info-list">
                <li className="mail-ico"><a href="mailto:booking@uthhotels.com">booking@uthhotels.com</a>, <a href="mailto:info@uthhotels.com">info@uthhotels.com</a></li>
                <li className="phone-ico">
                    <a href="tel:+919746838883">+91 9746838883</a>, <a href="tel:+919567338884">+91 9567338884</a>
                </li>
            </ul>
        </div>
    </div>
</footer>
    )
}
export default Footer;