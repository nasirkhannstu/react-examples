import React, { Component } from "react";
import Counter from "./counter";
import "./Counters.css";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      show
    } = this.props;
    let drawerClass = "cart-right";
    if (show) {
      drawerClass = "cart-right open";
    }
    return (
      <div>
        <div className={drawerClass}>
          <div className="row">
            <div className="col-md-12">
              <button onClick={onReset} className="btn btn-primary btn-sm-m-2">
                Reset
              </button>
              {counters.map(counter => (
                <Counter
                  key={counter.id}
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  counter={counter}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;
