import React, {Component, Fragment} from 'react';
import TopNavBar from "../../component/common/NavBar/TopNavBar";
import Footer from "../../component/common/Footer/Footer";
import Home from "../../component/home/Home";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <Home/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;