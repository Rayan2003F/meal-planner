import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/responsive.css';
import '../css/style.css';
import '../css/style.scss';

const Header = () => {
  return (
    <div>
      {/* header section starts */}
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>Feane</span>
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
              <span className=""> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  mx-auto ">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Chatbot">
                    Chat
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Meals">
                    Meals
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/AboutUs">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ServiceClient">
                    Client Service
                  </NavLink>
                </li>
              </ul>
              <div className="user_option">
                
                <Link to="/order-online" className="order_online">
                  Welcome!
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end header section */}
    </div>
  );
};

export default Header;
