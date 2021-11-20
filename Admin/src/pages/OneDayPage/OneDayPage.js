import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBar/TopNavBar";
import Footer from "../../component/common/Footer/Footer";
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