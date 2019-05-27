import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      price: 0
    };
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      name: "",
      img: "",
      price: 0
    });
  }

  render() {
    const { postNew } = this.props;
    console.log(this.state, "sdfasdfasdgadf");
    return (
      <div>
        <h2>Image URL:</h2>
        <input onChange={e => this.setState({ img: e.target.value })} />
        <h2>Product Name:</h2>
        <input
          onChange={e => this.setState({ name: e.target.value })}
          type="text"
        />
        <h2>Price:</h2>
        <input
          onChange={e => this.setState({ price: e.target.value })}
          type="text"
        />
        <div>
          <button
            onClick={e => {
              this.reset();
            }}
          >
            Cancel
          </button>
          <button onClick={() => postNew(this.state)}>Add to inventory</button>
        </div>
      </div>
    );
  }
}
