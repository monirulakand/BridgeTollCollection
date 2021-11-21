import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBarTop";
import Footer from "../../component/common/Footer";
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