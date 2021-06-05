import React from "react";
import "./nav.css";
import logo from "./images/bio_logo.png";

class Nav extends React.Component {
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
        <nav className="navbar navbar-icon-top navbar-expand-lg transparent navbar-inverse navbar-fixed-top">
          <a className="navbar-brand" href="/"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <img src={logo} width="200" alt="Logo" />
            </ul>

            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fa fa-instagram "></i>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fa fa-globe "></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
