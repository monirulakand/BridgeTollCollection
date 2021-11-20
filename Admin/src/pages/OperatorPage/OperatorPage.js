import React, {Component} from 'react';
import TopNavBar from "../../component/common/NavBar/TopNavBar";
import Footer from "../../component/common/Footer/Footer";
import Operator from "../../component/operator/operator";

class OperatorPage extends Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <Operator/>
                <Footer/>
            </div>
        );
    }
}

export default OperatorPage;