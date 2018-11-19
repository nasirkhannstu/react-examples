import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={"badge badge-" + this.getBadgeClass() + " m-2"}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2 "
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClass() {
    return this.props.counter.value === 0 ? "warning" : "primary";
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
