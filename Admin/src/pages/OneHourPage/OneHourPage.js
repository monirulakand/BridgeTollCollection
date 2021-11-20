import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBar/TopNavBar";
import Footer from "../../component/common/Footer/Footer";
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