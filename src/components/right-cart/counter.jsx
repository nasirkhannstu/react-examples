import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.counter.product.name}</h5>
        <span className={"badge badge-" + this.getBadgeClass() + " m-2"}>
          {this.formatCount()}
        </span>
        <div class="button_group">
          <button
            id="subtract"
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </button>
          <button id="reset">{this.formatCount()}</button>
          <button
            id="add"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)}>
            Delete
          </button>
        </div>
        {/* <button
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
        </button> */}
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
