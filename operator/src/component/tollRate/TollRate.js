import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Tab,Tabs} from "react-bootstrap";

class TollRate extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pageTopMargin">
                    <Row className="mt-5">
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h3 className="font20">Toll-Rate-Padma-Bridge</h3>
                            <table className="table font16 table-sm table-bordered mt-3 table-hover">
                                <thead>
                                <tr className="table-danger">
                                    <th scope="col">#</th>
                                    <th scope="col">Types of Vehicle</th>
                                    <th scope="col">Toll Rate</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="table-warning">
                                    <th scope="row">1</th>
                                    <td>Motorcycle</td>
                                    <td>50.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Car/Jeep</td>
                                    <td>550.00</td>
                                </tr>
                                <tr className="table-warning">
                                    <th scope="row">3</th>
                                    <td>Micro/Pickup</td>
                                    <td>600.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Small Bus</td>
                                    <td>750.00</td>
                                </tr>
                                <tr className="table-warning">
                                    <th scope="row">5</th>
                                    <td>Large Bus</td>
                                    <td>1000.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Small Truck (Max 5 Ton)</td>
                                    <td>1000.00</td>
                                </tr>
                                <tr className="table-warning">
                                    <th scope="row">7</th>
                                    <td>Medium Truck (Max 8 Ton)</td>
                                    <td>1250.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Large Truck (Max 12 Ton)</td>
                                    <td>2000.00</td>
                                </tr>
                                <tr className="table-warning">
                                    <th scope="row">9</th>
                                    <td>Trailer Lorry (4 Excel)</td>
                                    <td>3000.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Trailer Lorry (4-8 Excel)</td>
                                    <td>5000.00</td>
                                </tr>
                                <tr className="table-warning">
                                    <th scope="row">11</th>
                                    <td>Train</td>
                                    <td>10000000.00 (1 Core per Year)</td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TollRate;