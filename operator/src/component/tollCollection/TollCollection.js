import React, {Component,Fragment} from 'react';
import {Container, Col, Row, Modal, Button} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import vehicle1 from "../../asset/image/vehicle/bycicle.png";
import vehicle2 from "../../asset/image/vehicle/car.png";
import vehicle3 from "../../asset/image/vehicle/pickup-truck.png";
import vehicle4 from "../../asset/image/vehicle/school-bus.png";
import vehicle5 from "../../asset/image/vehicle/bus.png";
import vehicle6 from "../../asset/image/vehicle/delivery-truck.png";
import vehicle7 from "../../asset/image/vehicle/shipment.png";

class TollCollection extends Component {
    constructor(props) {
        super(props);
        this.state={
            FaqModal1:false,
        }
    }

    handleClose1=()=>{
        this.setState({ FaqModal1:false});
        toast.success("Toll Collection Successfull !",{
            position: "top-center",
            theme:"colored",
            autoClose: 2000,
        });
    }
    handleCloseButton=()=>{
        this.setState({ FaqModal1:false});
    }
    handleOpen1=()=>{
        this.setState({ FaqModal1:true});
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <h3 className="font20 mt-5">Padma-Bridge-Toll-Collection-Types</h3>
                    <Row className="mt-3">
                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <button type="button" onClick={this.handleOpen1} className="TollCardType1 m-2 p-3">
                                <img className="VehicleImg" src={vehicle1} alt=""/>
                                <h6 className="text-center VehicleTitle">Motorcycle</h6>
                                <h6 className="text-center VehiclePrice">200 ৳</h6>
                            </button>
                        </Col>

                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <button type="button" onClick={this.handleOpen1} className="TollCardType2 m-2 p-3">
                                <img className="VehicleImg" src={vehicle2} alt=""/>
                                <h6 className="text-center VehicleTitle">Car/Jeep</h6>
                                <h6 className="text-center VehiclePrice">400 ৳</h6>
                            </button>
                        </Col>

                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <button type="button" onClick={this.handleOpen1} className="TollCardType3 m-2 p-3">
                                <img className="VehicleImg" src={vehicle3} alt=""/>
                                <h6 className="text-center VehicleTitle">Micro/Pickup</h6>
                                <h6 className="text-center VehiclePrice">600 ৳</h6>
                            </button>
                        </Col>


                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <button type="button" onClick={this.handleOpen1} className="TollCardType4 m-2 p-3">
                                <img className="VehicleImg" src={vehicle4} alt=""/>
                                <h6 className="text-center VehicleTitle">Small Bus</h6>
                                <h6 className="text-center VehiclePrice">800 ৳</h6>
                            </button>
                        </Col>


                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <button type="button" onClick={this.handleOpen1} className="TollCardType5 m-2 p-3">
                                <img className="VehicleImg" src={vehicle5} alt=""/>
                                <h6 className="text-center VehicleTitle">Large Bus</h6>
                                <h6 className="text-center VehiclePrice">1000 ৳</h6>
                            </button>
                        </Col>


                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <button type="button" onClick={this.handleOpen1} className="TollCardType6 m-2 p-3">
                                <img className="VehicleImg" src={vehicle6} alt=""/>
                                <h6 className="text-center VehicleTitle">Small Truck (Max 5 Ton)</h6>
                                <h6 className="text-center VehiclePrice">1200 ৳</h6>
                            </button>
                        </Col>


                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <button type="button" onClick={this.handleOpen1} className="TollCardType7 m-2 p-3">
                                <img className="VehicleImg" src={vehicle7} alt=""/>
                                <h6 className="text-center VehicleTitle">Medium Truck (Max 8 Ton)</h6>
                                <h6 className="text-center VehiclePrice">1400 ৳</h6>
                            </button>
                        </Col>


                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <button type="button" onClick={this.handleOpen1} className="TollCardType8 m-2 p-3">
                                <img className="VehicleImg" src={vehicle1} alt=""/>
                                <h6 className="text-center VehicleTitle">Large Truck (Max 12 Ton)</h6>
                                <h6 className="text-center VehiclePrice">1600 ৳</h6>
                            </button>
                        </Col>

                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <button type="button" onClick={this.handleOpen1} className="TollCardType9 m-2 p-3">
                                <img className="VehicleImg" src={vehicle1} alt=""/>
                                <h6 className="text-center VehicleTitle">Trailer Lorry (4 Excel)</h6>
                                <h6 className="text-center VehiclePrice">1800 ৳</h6>
                            </button>
                        </Col>

                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <button type="button" onClick={this.handleOpen1} className="TollCardType10 m-2 p-3">
                                <img className="VehicleImg" src={vehicle1} alt=""/>
                                <h6 className="text-center VehicleTitle">Trailer Lorry (4-8 Excel)</h6>
                                <h6 className="text-center VehiclePrice">2000 ৳</h6>
                            </button>
                        </Col>

                        <Col className="" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <button type="button" onClick={this.handleOpen1} className="TollCardType11 m-2 p-3">
                                <img className="VehicleImg" src={vehicle1} alt=""/>
                                <h6 className="text-center VehicleTitle">Train</h6>
                                <h6 className="text-center VehiclePrice">1 Core (year)</h6>
                            </button>
                        </Col>
                    </Row>
                </Container>
                <Modal size="md" show={this.state.FaqModal1} aria-labelledby="contained-modal-title-vcenter"
                       centered onHide={this.handleClose1}>
                    <Modal.Body className="">
                        <p className="text-center ModalTextType">Vehicle Type: Motor Cycle</p>
                        <p className="text-center ModalTextPrice">Toll: 200 ৳</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-sm" variant="danger" onClick={this.handleCloseButton}>
                            Close
                        </Button>
                        <Button className="btn-sm" variant="primary" onClick={this.handleClose1}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
                <ToastContainer className="ToastMarginTop"/>
            </Fragment>
        );
    }
}

export default TollCollection;