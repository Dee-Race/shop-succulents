import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { productData } from "../data";
import { ProductConsumer } from "../context";

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
            <div className="row">
              <ProductConsumer>
                {hello => {
                  return <h1>{hello}</h1>;
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
