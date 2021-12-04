import React,{Component} from "react";
import Slider from "react-slick";

class ContentSlider extends Component{
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <React.Fragment>
                <Slider {...settings}>
                    
                <div className="each-hotel-resort">
                    <div class="hotel-resort-image">
                        <img src="assets/images/banner-one.jpg" />
                    </div>
                </div>

                <div className="each-hotel-resort">
                    <div class="hotel-resort-image">
                        <img src="assets/images/banner-two.jpg" />
                    </div>
                </div>

                <div className="each-hotel-resort">
                    <div class="hotel-resort-image">
                        <img src="assets/images/banner-three.jpg" />
                    </div>
                </div>

                <div className="each-hotel-resort">
                    <div class="hotel-resort-image">
                        <img src="assets/images/banner-four.jpg" />
                    </div>
                </div>




                </Slider>

            </React.Fragment>

        );
    }
};
export default ContentSlider;