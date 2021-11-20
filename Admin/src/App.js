import React, {Fragment} from 'react';
import "./asset/css/bootstrap.min.css";
import "./asset/css/fontawesome.css";
import "./asset/css/animate.min.css";
import './asset/css/style.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import TollRatePage from "./pages/TollRatePage/TollRatePage";
import OneHourPage from "./pages/OneHourPage/OneHourPage";
import OneDayPage from "./pages/OneDayPage/OneDayPage";
import OneWeekPage from "./pages/OneWeekPage/OneWeekPage";
import OneMonthPage from "./pages/OneMonthPage/OneMonthPage";
import SixMonthPage from "./pages/SixMonthPage/SixMonthPage";
import OneYearPage from "./pages/OneYearPage/OneYearPage";
import AllTimePage from "./pages/AllTimePage/AllTimePage";
import OperatorPage from "./pages/OperatorPage/OperatorPage";
import CctvMonitoringPage from "./pages/CCTVMonitoringPage/CCTVMonitoringPage";

function App() {
  return (
       <Fragment>
           <BrowserRouter>
               <Switch>
                   <Route exact path="/" render={(props) => <LoginPage {...props} key={Date.now()} />}/>
                   <Route exact path="/Analytics" render={(props) => <HomePage {...props} key={Date.now()} />}/>
                   <Route exact path="/Operator" render={(props) => <OperatorPage {...props} key={Date.now()} />}/>
                   <Route exact path="/Monitoring" render={(props) => <CctvMonitoringPage {...props} key={Date.now()} />}/>
                   <Route exact path="/AllTollRate" render={(props) => <TollRatePage {...props} key={Date.now()} />}/>
                   <Route exact path="/OneHour" render={(props) => <OneHourPage {...props} key={Date.now()} />}/>
                   <Route exact path="/OneDay" render={(props) => <OneDayPage {...props} key={Date.now()} />}/>
                   <Route exact path="/OneWeek" render={(props) => <OneWeekPage {...props} key={Date.now()} />}/>
                   <Route exact path="/OneMonth" render={(props) => <OneMonthPage {...props} key={Date.now()} />}/>
                   <Route exact path="/SixMonth" render={(props) => <SixMonthPage {...props} key={Date.now()} />}/>
                   <Route exact path="/OneYear" render={(props) => <OneYearPage {...props} key={Date.now()} />}/>
                   <Route exact path="/AllTime" render={(props) => <AllTimePage {...props} key={Date.now()} />}/>
               </Switch>
           </BrowserRouter>
       </Fragment>
  );
}

export default App;
