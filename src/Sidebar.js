import React from "react";
import "./sidebar.css";
import back from "./images/back.svg";
import $ from "jquery";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    $(window)
      .on("resize", function () {
        if ($(this).width() < 760) {
          $("tr td:first-child").click(function () {
            $(this).siblings().css({ display: "inline-block" });

            var $this = $(this);
            setTimeout(function () {
              $this.siblings().css("transform", "translateY(0)");
            }, 0);

            $("tr td:first-child")
              .not($(this))
              .siblings()
              .css({ display: "none", transform: "translateY(-9999px)" });
          });
        } else if ($(this).width() > 760) {
          //unbind click : name is not clickable when screen is > 700px
          $("tr td:first-child").unbind("click");
          //remove with jquery added styles
          $("tr td:first-child").siblings().css({ display: "", transform: "" });
        }
      })
      .resize();
    $(function () {
      // Sidebar toggle behavior
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar, #content").toggleClass("active");
        $(this).toggleClass("rotate");
      });
      $(".nav-item").on("click", function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
      });
    });
  }

  render() {
    return (
      <div>
        {/* Vertical navbar */}
        <div className="vertical-nav active" id="sidebar">
          <ul className="nav flex-column mb-0" style={{ marginTop: "40px" }}>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i className="fa fa-home"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i className="fa fa-flask"></i> Operational
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i className="fa fa-users"></i> Support Group
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i className="fa fa-file-text-o "></i> General Reports
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i className="fa fa-bullhorn"></i> Announcement
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i
                  className="fa fa-calendar-check-o
"
                ></i>{" "}
                Clock In
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i className="fa fa-file"></i> E - Document
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i className="fa fa-info-circle"></i> Informasi Pemeriksaan
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i className="fa fa-table"></i> Meeting Room
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i className="fa fa-file-archive-o"></i> Air Report
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i className="fa fa-database"></i> Data Master
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link ">
                <i className="fa fa-sign-out"></i> Log Out
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="http://example.com"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
              >
                <i className="fa fa-envelope"></i> link
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <div id="sidebarCollapse" type="button" className="rotate">
            <img src={back} />
          </div>
        </div>
        {/* End vertical navbar */}
      </div>
    );
  }
}

export default Sidebar;
