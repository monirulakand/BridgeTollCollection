import React, {Component} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import LoginLogo from "../../asset/image/bd.png"

class LoginOperator extends Component {
    render() {
        return (
            <div>
                <Container className="p-5 d-flex justify-content-center">
                    <Row className="LoginCard shadow-sm">
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                        <Col xl={10} lg={10} md={10} sm={12} xs={12}>
                            <Form>
                                <img
                                    className="loginLogoImg"
                                    src={LoginLogo}
                                    alt=""
                                />
                                <h6 className="loginTitle">বাংলাদেশ সড়ক পরিবহন ও সেতু মন্ত্রণালয়</h6>
                                <div className="form-group">
                                    <input type="text"
                                           className="form-control placeholder-text"
                                           placeholder="Enter User Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className="form-control placeholder-text"
                                           placeholder="Enter Password"
                                    />
                                </div>
                                <Link to="/Home" className="btn loginBtnText btn-block mb-5">Login</Link>
                            </Form>
                        </Col>
                        <Col xl={1} lg={1} md={1} sm={12} xs={12}>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LoginOperator;