import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBar/TopNavBar";
import Footer from "../../component/common/Footer/Footer";
import OneMonth from "../../component/TollPerTime/OneMonth";

class OneMonthPage extends Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <OneMonth/>
                <Footer/>
            </div>
        );
    }
}

export default OneMonthPage;