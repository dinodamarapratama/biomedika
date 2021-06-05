import React, { Component } from "react";
import Nav2 from "./Nav2";
import Sidebar from "./Sidebar";
import { Helmet } from "react-helmet";
import "./style.css";

class Next extends Component {
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
          <body className="background2" />
        </Helmet>
        <Nav2 />
        <Sidebar />
      </React.Fragment>
    );
  }
}

export default Next;
