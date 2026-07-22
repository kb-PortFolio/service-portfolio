import "../css/header.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const location_nav = useLocation().pathname;

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="logo-wrap">
            <div className="logo-img">
              <img src="/images/icon_control3.png" alt="KIM QA 로고" />
            </div>
            <h1 className="logo">KIM QA</h1>
          </Link>
          <p className="header-desc">Game & Web Quality Assurance</p>
        </div>

        <nav className="nav">
          <Link
            to="/"
            className={location_nav === "/" ? "active" : ""}
            onClick={() => setNaviActive("home")}
          >
            Home
          </Link>
          <Link
            to="/project"
            className={location_nav === "/project" ? "active" : ""}
            onClick={() => setNaviActive("project")}
          >
            Works
          </Link>
          <a
            href="#contact"
            className="link-contact"
            aria-label="Contact 영역으로 이동"
            title="Contact"
          >
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
