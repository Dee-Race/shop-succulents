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
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="succulents" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
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
