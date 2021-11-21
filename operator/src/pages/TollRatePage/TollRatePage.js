import React, {Component, Fragment} from 'react';
import TollRate from "../../component/tollRate/TollRate";
import Footer from "../../component/common/Footer";
import NavBarTop from "../../component/common/NavBarTop";

class TollRatePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBarTop/>
                <TollRate/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TollRatePage;