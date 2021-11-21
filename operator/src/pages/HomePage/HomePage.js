import React, {Component} from 'react';
import NavBarTop from "../../component/common/NavBarTop";
import Footer from "../../component/common/Footer";

class HomePage extends Component {
    render() {
        return (
            <div>
               <NavBarTop/>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;