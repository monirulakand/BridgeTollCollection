import React, {Component, Fragment} from 'react';
import {
    FaFacebookSquare,
    FaLinkedin,
    FaMobileAlt,
    FiYoutube,
    HiOutlineMail,
    IoLocationOutline,
    VscGlobe
} from "react-icons/all";
import {Link} from "react-router-dom";
import img1 from "../../../asset/image/ict.png"
import img2 from "../../../asset/image/org.png"

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="site-footer mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">About</h1>
                                <h6 className="FooterDes">Arena Web Security is a sister concern of Arena Web Technology. Arena Web Security is a renowned IT security company in Bangladesh since its establishment in 2012.</h6>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">Address</h1>
                                <h6 className="FooterDes"><IoLocationOutline/> House No-1, BLOCK-B Banasree, Main Road Rampura, Dhaka - 1219</h6>
                                <h6 className="FooterDes"><FaMobileAlt/> +880 1310&nbsp;333&nbsp;444, <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+880 1779&nbsp;224&nbsp;640</h6>
                                <h6 className="FooterDes"> <HiOutlineMail/> info@arenawebsecurity.net</h6>
                                <h6 className="FooterDes"><VscGlobe/> www.arenawebsecurity.net</h6>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">Information</h1>
                                <ul className="footer-links">
                                    <img src={img2} alt=""/>
                                </ul>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">Our Courses</h1>
                                <ul className="footer-links">
                                    <img src={img1} alt=""/>
                                </ul>
                            </div>
                        </div>
                        <hr/>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                               {/* <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                                    <a className="FooterInfoLinkText" target="_blank" href=""> Arena Web Security</a>.
                                </p>*/}
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" target="_blank" href=""><FaFacebookSquare /></a></li>
                                    <li><a className="linkedin" target="_blank" href=""><FaLinkedin/></a></li>
                                    <li><a className="youTube" target="_blank" href=""><FiYoutube/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;