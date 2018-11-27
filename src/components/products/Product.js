import React, { Component } from "react";

class Product extends Component {
  render() {
    const { product, onAdd } = this.props;
    return (
      <div className="col-md-3 col-sm-6">
        <div className="product-grid2">
          <div className="product-image2">
            <a href="#">
              <img
                className="pic-1"
                src={require(`../../img/${product.image}`)}
              />
              <img
                className="pic-2"
                src={require(`../../img/${product.image}`)}
              />
            </a>
            <ul className="social">
              <li>
                <a href="#" data-tip="Quick View">
                  <i className="fa fa-eye" />
                </a>
              </li>
              <li>
                <a href="#" data-tip="Add to Wishlist">
                  <i className="fa fa-shopping-bag" />
                </a>
              </li>
              <li>
                <a
                  onClick={() => onAdd(product)}
                  href="#"
                  data-tip="Add to Cart"
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </li>
            </ul>
            <button onClick={() => onAdd(product)} className="add-to-cart">
              Add to cart
            </button>
          </div>
          <div className="product-content">
            <h3 className="title">
              <a href="#">{product.name}</a>
            </h3>
            <span className="price">${product.price}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
