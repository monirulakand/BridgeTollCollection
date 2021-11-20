import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBar/TopNavBar";
import Footer from "../../component/common/Footer/Footer";
import OneYear from "../../component/TollPerTime/OneYear";

class OneYearPage extends Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <OneYear/>
                <Footer/>
            </div>
        );
    }
}

export default OneYearPage;