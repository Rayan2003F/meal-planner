import React from "react";
import { Link, NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <h1>
          <Link to="/">
          Ecomerce App
          </Link>
          </h1>
        <ul className="flex">
        <li className="main-list">
            <NavLink className="main-link" to="/">
              Home
            </NavLink>
            {/*<ul className="sub-ul">
              <li>
                <a href="">Project1.1</a>
              </li>
              <li>
                <a href="">Project1.2</a>
              </li>
              <li>
                <a href="">Project1.3</a>
              </li>
            </ul>*/}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Brand">
              Brand
            </NavLink>
            {/*<ul className="sub-ul">
              <li>
                <a href="">Project1.1</a>
              </li>
              <li>
                <a href="">Project1.2</a>
              </li>
              <li>
                <a href="">Project1.3</a>
              </li>
            </ul>*/}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Product">
              Product
            </NavLink>
            {/*<ul className="sub-ul">
              <li>
                <a href="">Project2.1</a>
              </li>
              <li>
                <a href="">Project2.2</a>
              </li>
              <li className="mini-Projects">
                <a href="">mini Projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">Project 1</a>
                  </li>
                  <li>
                    <a href="">Project 2</a>
                  </li>
                  <li>
                    <a href="">Project 3</a>
                  </li>
                </ul>
              </li>
            </ul>*/}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/ServiceClient">
              Service Client
            </NavLink>
            {/*<ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>*/}
          </li>
        </ul>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
        <div className="profile-button">
          <i className="fas fa-user"></i> {/* FontAwesome user icon */}
          <ul className="sub-ul sub-of-js">
              <li>
                <a href="">Profile</a>
              </li>
              <li>
                <a href="">Settings</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
        </div>
      </header>
      <header className="show-when-mobile">
        <h1>Ecomerce App</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
        <div className="main-div">
            <label htmlFor="html">
             Home <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            {/*<ul className="sub-div">
              <li>
                <a href="">Project1.1</a>
              </li>
              <li>
                <a href="">Project1.2</a>
              </li>
              <li>
                <a href="">Project1.3</a>
              </li>
            </ul>*/}
          </div>
          <div className="main-div">
            <label htmlFor="html">
             Brand <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            {/*<ul className="sub-div">
              <li>
                <a href="">Project1.1</a>
              </li>
              <li>
                <a href="">Project1.2</a>
              </li>
              <li>
                <a href="">Project1.3</a>
              </li>
            </ul>*/}
          </div>
          <div className="main-div">
            <label htmlFor="css">
             Product <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            {/*<ul className="sub-div">
              <li>
                <a href="">Project2.1</a>
              </li>
              <li>
                <a href="">Project2.2</a>
              </li>
              <li>
                <label className="mini-Projects" htmlFor="mini">
                  mini Projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">Project 1</a>
                  </li>
                  <li>
                    <a href="">Project 2</a>
                  </li>
                  <li>
                    <a href="">Project 3</a>
                  </li>
                </ul>
              </li>
            </ul>*/}
          </div>
          <div className="main-div">
            <label htmlFor="js">
             ServiceClient <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            {/*<ul className="sub-div">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>*/}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
