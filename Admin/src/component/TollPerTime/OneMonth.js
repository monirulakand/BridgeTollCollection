import React, {Component, Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import vehicle2 from "../../asset/image/vehicle12.png";
import vehicle1 from "../../asset/image/vehicle1.png";
import taka2 from "../../asset/image/taka2.png";
import print from "../../asset/image/print.png";

class OneMonth extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <Row className="">
                        <div className="col-lg-3 col-md-3 float-left">
                            <div className="mt-4">
                                <select className="dropdownBtn form-control" aria-label="Default select example">
                                    <option>Select Bridge</option>
                                    <option className="" value="1">Padma Bridge</option>
                                    <option className="bg-info" value="2">Bangabandhu Bridge</option>
                                    <option className="" value="3">Rupsha Bridge</option>
                                    <option className="bg-info" value="4">Shah Amanat Bridge</option>
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
                    </Row>
                    <Row className="mt-5">
                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="TollCard m-2 p-3">
                                <img className="TollImg" src={vehicle2} alt=""/>
                                <h6 className="text-center TollAmountTitle">12</h6>
                                <h6 className="text-center TollAmountDes">Total Vehicle Types</h6>
                            </div>
                        </Col>

                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="TollCard m-2 p-3">
                                <img className="TollImg" src={vehicle1} alt=""/>
                                <h6 className="text-center TollAmountTitle">5445522</h6>
                                <h6 className="text-center TollAmountDes">Total Vehicle</h6>
                            </div>
                        </Col>


                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="TollCard m-2 p-3">
                                <img className="TollImg" src={taka2} alt=""/>
                                <h6 className="text-center TollAmountTitle">2323525490.00 ৳</h6>
                                <h6 className="text-center TollAmountDes">Total Amount</h6>
                            </div>
                        </Col>


                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <div className="TollCard m-2 p-3">
                                <button onClick={window.print} className="btn printBtn btn-sm ">
                                    <img className="TollImg" src={print} alt=""/>
                                </button>
                                <h6 className="text-center TollAmountTitle">----</h6>
                                <h6 className="text-center TollAmountDes">Print Document</h6>
                            </div>
                        </Col>

                    </Row>
                    <Row id="to-print" className="mt-5">
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h3 className="font20">Toll-Padma-Bridge=(Last 1 Month)</h3>
                            <table className="table font16 table-sm table-bordered mt-3 table-hover">
                                <thead>
                                <tr className="table-danger">
                                    <th scope="col">#</th>
                                    <th scope="col">Types of Vehicle</th>
                                    <th scope="col">Toll Gate 1</th>
                                    <th scope="col">Toll Gate 2</th>
                                    <th scope="col">Total Vehicle</th>
                                    <th scope="col">Total Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="table-warning">
                                    <th scope="row">1</th>
                                    <td>Motorcycle</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>1500.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Car/Jeep</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>1500.00</td>
                                </tr>
                                <tr className="table-warning">
                                    <th scope="row">3</th>
                                    <td>Micro/Pickup</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>1500.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Small Bus</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>1500.00</td>
                                </tr>
                                <tr className="table-warning">
                                    <th scope="row">5</th>
                                    <td>Large Bus</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>1500.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Small Truck (Max 5 Ton)</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>1500.00</td>
                                </tr>
                                <tr className="table-warning">
                                    <th scope="row">7</th>
                                    <td>Medium Truck (Max 8 Ton)</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>1500.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Large Truck (Max 12 Ton)</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>1500.00</td>
                                </tr>
                                <tr className="table-warning">
                                    <th scope="row">9</th>
                                    <td>Trailer Lorry (4 Excel)</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>1500.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Trailer Lorry (4-8 Excel)</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>1500.00</td>
                                </tr>
                                <tr className="table-warning">
                                    <th scope="row">11</th>
                                    <td>Train</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>15</td>
                                    <td>1500.00</td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default OneMonth;