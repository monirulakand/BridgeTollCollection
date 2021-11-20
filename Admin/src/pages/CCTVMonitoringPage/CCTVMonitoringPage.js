import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBar/TopNavBar";
import Footer from "../../component/common/Footer/Footer";
import CctvMonitoring from "../../component/CCTVMonitoring/CCTVMonitoring";

class CctvMonitoringPage extends Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <CctvMonitoring/>
                <Footer/>
            </div>
        );
    }
}

export default CctvMonitoringPage;