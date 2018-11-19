import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/right-cart/counters";
import Backdrop from "./components/backdrop/Backdrop";
import Products from "./components/products/Products.js";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
        product: { id: 1, name: "Womens Designer Top", price: 599.99 }
      }
    ],
    products: [
      { id: 1, name: "Womens Designer Top", price: 599.99 },
      { id: 2, name: "Women's Yellow Top", price: 349.99 },
      { id: 3, name: "Blue - Red Top", price: 449.99 },
      { id: 4, name: "Women's Red Top", price: 139.99 }
    ],
    imageUrl: "https:picsum.photos/200/?random",
    sideDrawerOpen: false
  };
  handleAdd = product => {
    let productAdd = {
      id: this.state.counters.length + 1,
      value: 1,
      product: product
    };
    this.setState({ counters: this.state.counters.push(productAdd) });
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); // key and value are same so writeIn this way.
  };
  render() {
    return (
      <div className="main-div">
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <Products products={this.state.products} onAdd={this.handleAdd} />
        <div className="right-cart">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            show={this.state.sideDrawerOpen}
          />
        </div>

        <Backdrop
          show={this.state.sideDrawerOpen}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
      </div>
    );
  }
}

export default App;
