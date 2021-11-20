import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBar/TopNavBar";
import Footer from "../../component/common/Footer/Footer";
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