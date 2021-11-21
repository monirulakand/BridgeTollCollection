import React, {Component} from 'react';
import NavBarTop from "../../component/common/NavBarTop";
import Home from "../../component/home/Home";
import Footer from "../../component/common/Footer";


class HomePage extends Component {
    render() {
        return (
            <div>
               <NavBarTop/>
                <Home/>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;