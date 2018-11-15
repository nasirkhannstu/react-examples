import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https:picsum.photos/200/?random",
    tags: ["tag1", "tag2", "tag3"]
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span className={"badge badge-" + this.getBadgeClass() + " m-2"}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  getBadgeClass() {
    return this.state.count === 0 ? "warning" : "primary";
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
