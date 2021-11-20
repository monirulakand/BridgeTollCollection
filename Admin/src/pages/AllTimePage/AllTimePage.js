import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBar/TopNavBar";
import Footer from "../../component/common/Footer/Footer";
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