import React, {Fragment} from 'react';
import "./asset/css/bootstrap.min.css";
import "./asset/css/fontawesome.css";
import "./asset/css/animate.min.css";
import './asset/css/style.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import TollRatePage from "./pages/TollRatePage/TollRatePage";
import TollCollectionPage from "./pages/TollCollectionPage/TollCollectionPage";
import OneHourPage from "./pages/OneHourPage/OneHourPage";
import OneDayPage from "../src/pages/OneDayPage/OneDayPage"
import OneWeekPage from "../src/pages/OneWeekPage/OneWeekPage"
import OneMonthPage from "../src/pages/OneMonthPage/OneMonthPage"
import SixMonthPage from "../src/pages/SixMonthPage/SixMonthPage"
import OneYearPage from "../src/pages/OneYearPage/OneYearPage"
import AllTimePage from "../src/pages/AllTimePage/AllTimePage"

function App() {
  return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <LoginPage {...props} key={Date.now()} />}/>
              <Route exact path="/Home" render={(props) => <HomePage {...props} key={Date.now()} />}/>
              <Route exact path="/AllTollCollection" render={(props) => <TollCollectionPage {...props} key={Date.now()} />}/>
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
