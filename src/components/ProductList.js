import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { productData } from "../data";

class ProductList extends Component {
  state = {
    products: productData
  };

  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="succulents" />
            <div className="row" />
          </div>
        </div>
      </React.Fragment>

      //<Product />
    );
  }
}

export default ProductList;
