import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../../asset/image/bd.png";
import logo1 from "../../asset/image/mujib.png";
import {Container, Nav, Navbar} from "react-bootstrap";

class NavBarTop extends Component {
    render() {
        return (
            <Navbar expand="lg" className="sticky-top Navbar">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/Home">
                                <img src={logo} alt=""/>
                                <img className="mujibLogo" src={logo1} alt=""/>
                            </Link>
                            <h6 className="navTitleFont">সড়ক পরিবহন ও সেতু মন্ত্রণালয়</h6>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link> <NavLink exact className="nav-font mt-5" to="/AllTollCollection">COLLECTION</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact className="nav-font mt-5" to="/AllTollRate">TOLL RATE</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact className="btn NavLogOut" to="/">LOG OUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBarTop;
