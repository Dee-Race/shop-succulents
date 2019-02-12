import React, { Component } from "react";
import { productData, productDetail } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: productData,
    productDetail: productDetail
  };

  handleProductDetail = () => {
    console.log("Hello from detail");
  };

  handleAddToCart = () => {
    console.log("Hello from add to cart");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleProductDetail: this.handleProductDetail,
          handleAddToCart: this.handleAddToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export default ProductProvider;

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
