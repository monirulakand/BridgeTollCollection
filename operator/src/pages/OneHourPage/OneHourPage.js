import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBarTop";
import Footer from "../../component/common/Footer";
import OneHour from "../../component/TollPerTime/OneHour";

class OneHourPage extends Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <OneHour/>
                <Footer/>
            </div>
        );
    }
}

export default OneHourPage;