import React, {Component,Fragment} from 'react';
import img2 from "../../asset/image/org.png";
import img1 from "../../asset/image/ict.png";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="site-footer mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">আমাদের সম্পর্কে</h1>
                                <h6 className="FooterDes"> সড়ক পরিবহন ও মহাসড়ক বিভাগ</h6>
                                <h6 className="FooterDes"> গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h6>
                                <h6 className="FooterDes"> সড়ক পরিবহন ও মহাসড়ক বিভাগ</h6>
                                <h6 className="FooterDes"> গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h6>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">তথ্য ও জিজ্ঞাসা</h1>
                                <h6 className="FooterDes">জিজ্ঞাসা</h6>
                                <h6 className="FooterDes">সহায়িকা</h6>
                                <h6 className="FooterDes"> প্রাইভেসি পলিসি</h6>
                                <h6 className="FooterDes"> অন্যান্য সহযোগী প্রতিষ্ঠানসমূহ</h6>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">কারিগরি সহায়তায় -</h1>
                                <ul className="footer-links">
                                    <img src={img2} alt=""/>
                                </ul>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                                <h1 className="FooterTitle mb-3">সার্বিক তত্ত্বাবধায়নে-</h1>
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
                                    <li><a className="facebook" target="_blank" href=""> </a></li>
                                    <li><a className="linkedin" target="_blank" href=""> </a></li>
                                    <li><a className="youTube" target="_blank" href=""> </a></li>
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