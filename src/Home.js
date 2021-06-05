import React, { Component } from "react";
import Nav from "./Nav";
import Login from "./Login";
import { Helmet } from "react-helmet";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <title>Biomedika</title>
          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <body className="background" />
        </Helmet>
        <Nav />
        <Login />
      </React.Fragment>
    );
  }
}

export default Home;
