import React, {Component, Fragment} from 'react';
import Marquee from "react-fast-marquee";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import logo from "../../../asset/image/bd.png"
import logo1 from "../../../asset/image/mujib.png"
class TopNavBar extends Component {
    render() {
        return (
            <Fragment>
                <Navbar expand="lg" className="sticky-top Navbar">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/Analytics">
                                    <img src={logo} alt=""/>
                                    <img className="mujibLogo" src={logo1} alt=""/>
                                </Link>
                                <h6 className="navTitleFont">সড়ক পরিবহন ও সেতু মন্ত্রণালয়</h6>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link> <NavLink exact className="nav-font mt-4" to="/Analytics">ANALYTICS</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact className="nav-font mt-4" to="/AllTollRate">TOLL RATE</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact className="nav-font mt-4" to="/Operator">OPERATOR</NavLink></Nav.Link>
                                <Nav.Link> <NavLink exact className="btn-sm NavLogOut" to="/">LOG OUT</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavBar;