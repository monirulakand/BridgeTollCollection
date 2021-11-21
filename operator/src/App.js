import React, {Fragment} from 'react';
import "./asset/css/bootstrap.min.css";
import "./asset/css/fontawesome.css";
import "./asset/css/animate.min.css";
import './asset/css/style.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <LoginPage {...props} key={Date.now()} />}/>
              <Route exact path="/Home" render={(props) => <HomePage {...props} key={Date.now()} />}/>
              <Route exact path="/AllTollCollection" render={(props) => <HomePage {...props} key={Date.now()} />}/>
              <Route exact path="/AllTollRate" render={(props) => <HomePage {...props} key={Date.now()} />}/>
          </Switch>
        </BrowserRouter>
      </Fragment>
  );
}

export default App;
