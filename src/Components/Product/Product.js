import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { element, updateById, deleteById } = this.props;
    console.log(element, "efgasdfasdf");
    return (
      <div className="productDisplay">
        <img src={element.img} />
        <h2>{element.price}</h2>
        <h2>{element.name}</h2>
        <button onClick={() => deleteById(element.id, element)}>Delete</button>
        <button onClick={() => updateById(element.id, element)}>Update</button>
      </div>
    );
  }
}
