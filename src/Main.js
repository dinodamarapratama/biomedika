import React, { Component } from "react";
import Home from "./Home";
import Next from "./Next";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/next" exact component={Next} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;
