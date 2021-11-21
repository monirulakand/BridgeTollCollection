import React, {Component} from 'react';
import NavBarTop from "../../component/common/NavBarTop";
import TollCollection from "../../component/tollCollection/TollCollection";
import Footer from "../../component/common/Footer";

class TollCollectionPage extends Component {
    render() {
        return (
            <div>
                <NavBarTop/>
                <TollCollection/>
                <Footer/>
            </div>
        );
    }
}

export default TollCollectionPage;