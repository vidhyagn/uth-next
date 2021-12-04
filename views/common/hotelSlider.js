// https://www.npmjs.com/package/react-responsive-carousel
import React,{Component} from "react";
import Slider from "react-slick";
import {IMAGE_PATH} from "../../constants";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
class ContentSlider extends Component{
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    render() {

        let hotelImages = this.props.images || [];
        console.log(hotelImages)
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: hotelImages.length>=4 ?4 : hotelImages.length,
            slidesToScroll: 1,            
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="hotel-gallery-container">
                {hotelImages.length > 0 &&
                <Slider {...settings}>
                    {
                        hotelImages.map(item =>
                            <div className="hotel-gallery">
                                <img src={`${IMAGE_PATH + item.filename}`}/>
                            </div>
                        )
                    }
                </Slider>
                }

            </div>

        );
    }
};
export default ContentSlider;