import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBar/TopNavBar";
import Footer from "../../component/common/Footer/Footer";
import OneWeek from "../../component/TollPerTime/OneWeek";

class OneWeekPage extends Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <OneWeek/>
                <Footer/>
            </div>
        );
    }
}

export default OneWeekPage;
