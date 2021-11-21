import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBarTop";
import Footer from "../../component/common/Footer";
import SixMonth from "../../component/TollPerTime/SixMonth";

class SixMonthPage extends Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <SixMonth/>
                <Footer/>
            </div>
        );
    }
}

export default SixMonthPage;