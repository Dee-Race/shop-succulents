import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-light px-sm-5">
        <Link to="/" className="navbar-brand">
          <h3>Home</h3>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Succulents
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
