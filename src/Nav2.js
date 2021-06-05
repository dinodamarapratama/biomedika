import React from "react";
import "./nav.css";
import logo from "./images/bio_logo.png";

class Nav2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-icon-top navbar-expand-lg transparent navbar-inverse navbar-fixed-top"
          style={{
            WebkitBoxShadow: "2px 2px 2px #888",
            MozBoxShadow: "2px 2px 2px #888",
            boxShadow: "2px 2px 2px #888",
            zIndex: 999,
          }}
        >
          <a className="navbar-brand" style={{ margin: "0px" }} href="#">
            <img src={logo} alt="Logo" style={{ width: "200px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-arrows-alt "></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-bell"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-flag"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-commenting"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-file"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-user-circle"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-bars"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav2;
