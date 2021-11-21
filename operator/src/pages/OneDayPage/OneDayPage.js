import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBarTop";
import Footer from "../../component/common/Footer";
import OneDay from "../../component/TollPerTime/OneDay";

class OneDayPage extends Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <OneDay/>
                <Footer/>
            </div>
        );
    }
}

export default OneDayPage;