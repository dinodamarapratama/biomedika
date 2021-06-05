import React, { Component } from "react";
import bg1 from "./images/bg1.png";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6">
            <p
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "-20px",
              }}
            >
              Hello!
            </p>
            <h4
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                marginBottom: "20px",
                lineHeight: "80px",
              }}
            >
              WELCOME <br />
              TO MIS APP
            </h4>
            <img
              className="d-none d-sm-none d-md-none d-lg-block"
              src={bg1}
              width="100%"
              style={{ marginBottom: "20px" }}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 style={{ fontWeight: "bold" }}>User Login</h3>
                    <p className="text-muted mb-4">Welcome Back</p>
                    <form>
                      <div className="form-group mb-3">
                        <div className="text-center d-flex justify-content-between">
                          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                            NIP / Username / Name
                          </p>
                        </div>
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          required
                          autofocus
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          style={{ backgroundColor: "#c9d9dd!important" }}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <div className="text-center d-flex justify-content-between mt-4">
                          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                            Password
                          </p>
                        </div>
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          style={{ backgroundColor: "#c9d9dd!important" }}
                        />
                      </div>
                      <div className="row">
                        <div className="col-6 mx-auto">
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              id="customCheck1"
                              type="checkbox"
                              defaultChecked
                              className="custom-control-input"
                            />
                            <label
                              htmlFor="customCheck1"
                              className="custom-control-label"
                              style={{ fontSize: "12px" }}
                            >
                              Remember password
                            </label>
                          </div>
                        </div>
                        <div className="col-6 mx-auto">
                          <a
                            href="/"
                            style={{ fontSize: "12px", float: "right" }}
                          >
                            forgot password
                          </a>
                        </div>
                      </div>
                      <Link to="/next">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          style={{
                            backgroundColor: "#c9d9dd",
                            borderColor: "#c9d9dd",
                            color: "#000",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          Sign in
                        </button>
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
