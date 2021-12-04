import React,{useState } from "react";

import { enGB } from 'date-fns/locale'
import { DatePicker} from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

function Banner(Props) {
    const [videoMuted, setVideoMuted] = useState(true);
    const [action, setVideoAction] = useState('play');
    const [showAvailStatus, toggleAvailabilityBar] = useState(false);

    const today = new Date();
    const [startDate, setStartDate] = useState(new Date());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [endDate, setEndDate] = useState(tomorrow);


    const [counter, modifyCounter] = useState(2)

    const toggleVideo = (action) => {
        let vid = document.getElementById("banner-video");
        if(action === 'play') {
            vid.play();
        }
        else if(action === 'pause') {
            vid.pause();
        }
        setVideoAction(action)
    }

    const incrementCounter = () => {
        let guest_count = counter;
        modifyCounter(++guest_count);
    }
    const decrementCounter = () => {
        let guest_count = counter;
        if(guest_count>1) {
           modifyCounter(--guest_count);
        }
    }

    const checkAvailability = () => {
        let searchParams = {
            startDate : startDate,
            endDate : endDate,
            guest_count : counter
        }
        Props.searchHotels(searchParams);
    }

    return (
        <section  className="banner-section carousel-banner video-gradient">

            <div className="booking-wrapper">
                <div className="container">
                    {!showAvailStatus &&
                    <button className="booking-persistant" onClick={() => toggleAvailabilityBar(!showAvailStatus)}>Check
                        Availability</button>
                    }


                    <div className={`booking-availability ${showAvailStatus ? '' :'hide'}`}>
                        <div className="from-date">
                            <div className="label">Check-In</div>
                            <div className="date-calendar">
                                <DatePicker date={startDate} onDateChange={setStartDate} locale={enGB}>
                                    {({ inputProps, focused }) => (
                                        <input
                                            {...inputProps}
                                        />
                                    )}
                                </DatePicker>
                            </div>
                        </div>
                        <div className="to-date">
                            <div className="label">Check-Out</div>
                            <div className="date-calendar">
                                <DatePicker date={endDate} onDateChange={setEndDate} locale={enGB}>
                                    {({ inputProps, focused }) => (
                                        <input
                                            {...inputProps}
                                        />
                                    )}
                                </DatePicker>
                            </div>
                        </div>
                        <div className="count">
                            <div className="label">GUESTS</div>
                            <div className="counter">
                                <input type="number" name="counter" id="counter" value={counter}/>
                                <div className="counter-btn-block">
                                    <button className="count-up" onClick={()=>incrementCounter()}></button>
                                    <button className="count-down" onClick={()=>decrementCounter()}></button>
                                </div>
                            </div>
                        </div>
                        <button className="check-avail" onClick={()=>checkAvailability()}>Book Now</button>
                    </div>
                </div>
            </div>




            <video id="banner-video" src="./assets/videos/theme-video.mp4"  loop={true} muted={videoMuted} autoPlay={true} />
            <div className="video-control">
                <button className={`pause ${action === 'pause' ? 'active' : ''}`} onClick={() => toggleVideo(action === 'play' ? 'pause' : 'play')}></button>
                <button className={`mute ${!videoMuted ? 'active' : ''}`} onClick={() => setVideoMuted(!videoMuted)}></button>
            </div>
            <div className="carousel-text-block">
                <div className="container">
                    <h1>LOREM IPSUM DOLOR SIT AMET</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <button className="banner-btn">KNOW MORE</button>
                </div>
            </div>
        </section>
    )
}
export default Banner;
