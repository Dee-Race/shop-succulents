import React, { Component } from "react";
import { productData, productDetail } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    productDetail: productDetail
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    //loop through all store products
    productData.forEach(item => {
      const singleItem = { ...item };
      // copying the values with {...item}
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  handleProductDetail = () => {
    console.log("Hello from detail");
  };

  handleAddToCart = id => {
    console.log(`hello from add to card.id is ${id}`);
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
