import React, { Component } from "react";
import { Link } from "react-router-dom";
//import styled from "styled-components";
import { ButtonContainer } from "./Button";
import ProductList from "./ProductList";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-light bg-light px-sm-5">
        <Link to="/" className="navbar-brand">
          <i class="fas fa-spa" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Succulents
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            Cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
