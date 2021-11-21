import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBarTop";
import Footer from "../../component/common/Footer";
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
