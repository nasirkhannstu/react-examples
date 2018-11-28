import React, { Component } from "react";
import Product from "./Product";
import "./products.css";

class Products extends Component {
  render() {
    const { products, onAdd } = this.props;
    return (
      <div className="container">
        <h3 className="h3">Products & cart Without Redux </h3>
        <div className="row">
          {products.map(product => (
            <Product product={product} onAdd={onAdd} />
          ))}
        </div>
      </div>
    );
  }
}
export default Products;
