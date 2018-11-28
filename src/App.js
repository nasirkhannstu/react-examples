import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/right-cart/counters";
import Backdrop from "./components/backdrop/Backdrop";
import Products from "./components/products/Products.js";
import SweetAlert from "react-bootstrap-sweetalert";
import "./App.css";

// https://medium.com/@_mariacheline/deploy-create-react-app-project-to-github-pages-2eb6deda5b89

// Load Dynamic Component https://www.youtube.com/watch?v=Qqgm170PZwk

class App extends Component {
  state = {
    counters: [],
    products: [
      { id: 1, name: "Stylish Headphone", price: 599.99, image: "a.jpg" },
      { id: 2, name: "Black Headphone", price: 349.99, image: "b.jpg" },
      { id: 3, name: "Red - Black Headphone", price: 449.99, image: "c.jpg" },
      { id: 4, name: "White Headphone", price: 139.99, image: "d.jpg" }
    ],
    imageUrl: "https:picsum.photos/200/?random",
    sideDrawerOpen: false,
    alert: null
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
    } else {
      const message = (
        <SweetAlert
          success
          title="You already Add this."
          onConfirm={this.hideAlert}
        />
      );
      this.setState({ alert: message });
    }
  };
  hideAlert = () => {
    this.setState({
      alert: null
    });
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
        {this.state.alert}
      </div>
    );
  }
}

export default App;
