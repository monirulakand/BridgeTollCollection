import React, {Component, Fragment} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video1 from "../../asset/video/back.mp4"
import bridge1 from "../../asset/image/bridge/padma.jpg"
import bridge2 from "../../asset/image/bridge/padma1.jpg"
import bridge3 from "../../asset/image/bridge/padma2.jpg"
import bridge4 from "../../asset/image/bridge/rupsha.jpg"
import bridge5 from "../../asset/image/bridge/bangabandhu_bridge.png"
import bridge6 from "../../asset/image/bridge/bangabandhu_bridge1.jpg"
import bridge7 from "../../asset/image/bridge/amanat.jpg"
class Home extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        let settings = {
            dots: false,
            infinite: true,
            loop:true,
            speed: 500,
            autoplaySpeed:1800,
            autoplay:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeMove:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <div className="container video-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 float-left">
                            <div className="mt-4">
                                <select className="dropdownBtn form-control" aria-label="Default select example">
                                    <option>Select Bridge</option>
                                    <option className="" value="1">Padma Bridge</option>
                                    <option className="bg-info" value="3">Bangabandhu Bridge</option>
                                    <option className="" value="1">Rupsha Bridge</option>
                                    <option className="bg-info" value="3">Shah Amanat Bridge</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 float-right">
                            <div className="mt-4">
                                <Link to="/AllTime" className="btn mx-1 float-right analyticsBtn">All</Link>
                                <Link to="/OneYear" className="btn mx-1 float-right analyticsBtn">1 Year</Link>
                                <Link to="/SixMonth" className="btn mx-1 float-right analyticsBtn">6 Month</Link>
                                <Link to="/OneMonth" className="btn mx-1 float-right analyticsBtn">1 Month</Link>
                                <Link to="/OneWeek" className="btn mx-1 float-right analyticsBtn">1 Week</Link>
                                <Link to="/OneDay" className="btn mx-1 float-right analyticsBtn">1 Day</Link>
                                <Link to="/OneHour" className="btn mx-1 float-right analyticsBtn">1 Hour</Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Slider ref={c=>(this.slider=c)} {...settings}>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 p-2 mx-2">
                                <img className="BridgeImage" src={bridge1} alt=""/>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 p-2 mx-2">
                                <img className="BridgeImage" src={bridge2} alt=""/>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 p-2 mx-2">
                                <img className="BridgeImage" src={bridge3} alt=""/>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 p-2 mx-2">
                                <img className="BridgeImage" src={bridge4} alt=""/>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 p-2 mx-2">
                                <img className="BridgeImage" src={bridge5} alt=""/>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 p-2 mx-2">
                                <img className="BridgeImage" src={bridge6} alt=""/>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 p-2 mx-2">
                                <img className="BridgeImage" src={bridge7} alt=""/>
                            </div>

                        </Slider>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;