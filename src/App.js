import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/right-cart/counters";
import Backdrop from "./components/backdrop/Backdrop";
import Products from "./components/products/Products.js";
import "./App.css";

class App extends Component {
  state = {
    counters: [],
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
    const hasIndex = this.state.counters.findIndex(
      c => c.product.id === product.id
    );
    if (hasIndex === -1) {
      let productAdd = {
        id: product.id,
        value: 1,
        product: product
      };
      const counters = [productAdd, ...this.state.counters];
      this.setState({ counters: counters, sideDrawerOpen: true });
      console.log(this.state.counters);
    }
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
  handleDecrement = counter => {
    if (counter.value > 1) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counter[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
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
          totalCounters={this.state.counters.length}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <Products products={this.state.products} onAdd={this.handleAdd} />
        <div className="right-cart">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
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
