import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBarTop";
import Footer from "../../component/common/Footer";
import All from "../../component/TollPerTime/All";

class AllTimePage extends Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <All/>
                <Footer/>
            </div>
        );
    }
}

export default AllTimePage;