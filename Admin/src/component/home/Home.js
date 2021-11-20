import React, {Component, Fragment} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Video1 from "../../asset/video/back.mp4"

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="container video-container">
                    <div className="row">
                        {/*<video autoPlay muted loop>
                            <source src={Video1} type="video/mp4"/>
                        </video>*/}
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
                </div>
            </Fragment>
        );
    }
}

export default Home;