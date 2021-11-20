import React, {Component, Fragment} from 'react';
import TopNavBar from "../../component/common/NavBar/TopNavBar";
import TollRate from "../../component/tollRate/TollRate";
import Footer from "../../component/common/Footer/Footer";

class TollRatePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <TollRate/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TollRatePage;