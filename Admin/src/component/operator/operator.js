import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import vehicle2 from "../../asset/image/vehicle12.png";
import OperatorImg from "../../asset/image/operator.png"
import vehicle1 from "../../asset/image/vehicle1.png";
import taka2 from "../../asset/image/taka2.png";
import print from "../../asset/image/print.png";

class Operator extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pageTopMargin">
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="padma" id="uncontrolled-tab-example" className="mb-3 font18">
                                <Tab className="mx-2" eventKey="padma" title="Padma Bridge">
                                    <h3 className="font20 mt-5">Padma-Bridge-Operator</h3>
                                    <Row className="mt-3">
                                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <div className="TollCard m-2 p-3">
                                                <img className="OperatorImg" src={OperatorImg} alt=""/>
                                                <h6 className="text-center OperatorTitle">Monirul Islam</h6>
                                                <h6 className="text-center OperatorDes">Gate 1</h6>
                                            </div>
                                        </Col>

                                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <div className="TollCard m-2 p-3">
                                                <img className="OperatorImg" src={OperatorImg} alt=""/>
                                                <h6 className="text-center OperatorTitle">Monirul Islam</h6>
                                                <h6 className="text-center OperatorDes">Gate 2</h6>
                                            </div>
                                        </Col>


                                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <div className="TollCard m-2 p-3">
                                                <img className="OperatorImg" src={OperatorImg} alt=""/>
                                                <h6 className="text-center OperatorTitle">Monirul Islam</h6>
                                                <h6 className="text-center OperatorDes">Gate 1</h6>
                                            </div>
                                        </Col>


                                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <div className="TollCard m-2 p-3">
                                                <img className="OperatorImg" src={OperatorImg} alt=""/>
                                                <h6 className="text-center OperatorTitle">Monirul Islam</h6>
                                                <h6 className="text-center OperatorDes">Gate 2</h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab className="mx-2" eventKey="bangabandhu" title="Bangabandhu Bridge">
                                    <h3 className="font20 mt-5">Padma-Bridge-Operator</h3>
                                    <Row className="mt-3">
                                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <div className="TollCard m-2 p-3">
                                                <img className="OperatorImg" src={OperatorImg} alt=""/>
                                                <h6 className="text-center OperatorTitle">Monirul Islam</h6>
                                                <h6 className="text-center OperatorDes">Gate 1</h6>
                                            </div>
                                        </Col>

                                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <div className="TollCard m-2 p-3">
                                                <img className="OperatorImg" src={OperatorImg} alt=""/>
                                                <h6 className="text-center OperatorTitle">Monirul Islam</h6>
                                                <h6 className="text-center OperatorDes">Gate 2</h6>
                                            </div>
                                        </Col>


                                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <div className="TollCard m-2 p-3">
                                                <img className="OperatorImg" src={OperatorImg} alt=""/>
                                                <h6 className="text-center OperatorTitle">Monirul Islam</h6>
                                                <h6 className="text-center OperatorDes">Gate 1</h6>
                                            </div>
                                        </Col>


                                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <div className="TollCard m-2 p-3">
                                                <img className="OperatorImg" src={OperatorImg} alt=""/>
                                                <h6 className="text-center OperatorTitle">Monirul Islam</h6>
                                                <h6 className="text-center OperatorDes">Gate 2</h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab className="mx-2" eventKey="rupsha" title="Rupsha Bridge">
                                    <Row className="mt-5">
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <h3 className="font20">Toll-Rate-Rupsha-Bridge</h3>
                                            <table className="table font16 table-sm table-bordered mt-3 table-hover">
                                                <thead>
                                                <tr className="table-danger">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Types of Vehicle</th>
                                                    <th scope="col">Toll Rate</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="table-success">
                                                    <th scope="row">1</th>
                                                    <td>Motorcycle</td>
                                                    <td>50.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Car/Jeep</td>
                                                    <td>550.00</td>
                                                </tr>
                                                <tr className="table-success">
                                                    <th scope="row">3</th>
                                                    <td>Micro/Pickup</td>
                                                    <td>600.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Small Bus</td>
                                                    <td>750.00</td>
                                                </tr>
                                                <tr className="table-success">
                                                    <th scope="row">5</th>
                                                    <td>Large Bus</td>
                                                    <td>1000.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td>Small Truck (Max 5 Ton)</td>
                                                    <td>1000.00</td>
                                                </tr>
                                                <tr className="table-success">
                                                    <th scope="row">7</th>
                                                    <td>Medium Truck (Max 8 Ton)</td>
                                                    <td>1250.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">8</th>
                                                    <td>Large Truck (Max 12 Ton)</td>
                                                    <td>2000.00</td>
                                                </tr>
                                                <tr className="table-success">
                                                    <th scope="row">9</th>
                                                    <td>Trailer Lorry (4 Excel)</td>
                                                    <td>3000.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">10</th>
                                                    <td>Trailer Lorry (4-8 Excel)</td>
                                                    <td>5000.00</td>
                                                </tr>
                                                <tr className="table-success">
                                                    <th scope="row">11</th>
                                                    <td>Train</td>
                                                    <td>10000000.00 (1 Core per Year)</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab className="mx-2" eventKey="Amanat" title="Shah Amanat Bridge">
                                    <Row className="mt-5">
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <h3 className="font20">Toll-Rate-Shah Amanat-Bridge</h3>
                                            <table className="table font16 table-sm table-bordered mt-3 table-hover">
                                                <thead>
                                                <tr className="table-danger">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Types of Vehicle</th>
                                                    <th scope="col">Toll Rate</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Motorcycle</td>
                                                    <td>50.00</td>
                                                </tr>
                                                <tr className="table-info">
                                                    <th scope="row">2</th>
                                                    <td>Car/Jeep</td>
                                                    <td>550.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Micro/Pickup</td>
                                                    <td>600.00</td>
                                                </tr>
                                                <tr className="table-info">
                                                    <th scope="row">4</th>
                                                    <td>Small Bus</td>
                                                    <td>750.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>Large Bus</td>
                                                    <td>1000.00</td>
                                                </tr>
                                                <tr className="table-info">
                                                    <th scope="row">6</th>
                                                    <td>Small Truck (Max 5 Ton)</td>
                                                    <td>1000.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">7</th>
                                                    <td>Medium Truck (Max 8 Ton)</td>
                                                    <td>1250.00</td>
                                                </tr>
                                                <tr className="table-info">
                                                    <th scope="row">8</th>
                                                    <td>Large Truck (Max 12 Ton)</td>
                                                    <td>2000.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">9</th>
                                                    <td>Trailer Lorry (4 Excel)</td>
                                                    <td>3000.00</td>
                                                </tr>
                                                <tr className="table-info">
                                                    <th scope="row">10</th>
                                                    <td>Trailer Lorry (4-8 Excel)</td>
                                                    <td>5000.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">11</th>
                                                    <td>Train</td>
                                                    <td>10000000.00 (1 Core per Year)</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Operator;