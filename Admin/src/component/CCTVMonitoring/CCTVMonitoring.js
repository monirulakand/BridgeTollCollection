import React, {Component} from 'react';
import Video1 from "../../asset/video/toll.mp4"

class CctvMonitoring extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4 mt-2 videoCss">
                            <video autoPlay muted loop>
                                <source src={Video1} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="col-lg-4 mt-2 videoCss">
                            <video autoPlay muted loop>
                                <source src={Video1} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="col-lg-4 mt-2 videoCss">
                            <video autoPlay muted loop>
                                <source src={Video1} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="col-lg-4 mt-2 videoCss">
                            <video autoPlay muted loop>
                                <source src={Video1} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="col-lg-4 mt-2 videoCss">
                            <video autoPlay muted loop>
                                <source src={Video1} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="col-lg-4 mt-2 videoCss">
                            <video autoPlay muted loop>
                                <source src={Video1} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CctvMonitoring;