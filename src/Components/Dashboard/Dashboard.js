import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
    this.getFromDB = this.getFromDB.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
    this.postNew = this.postNew.bind(this);
  }

  componentDidMount() {
    this.getFromDB();
    console.log(this.state.inventory);
  }

  getFromDB() {
    axios
      .get("/api/products")
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteById(id, item) {
    axios.delete(`/api/products/${id}`, item).then(this.getFromDB);
  }

  updateById(id, item) {
    axios.put(`/api/products/${id}`, item).then(this.getFromDB);
  }

  postNew(item) {
    axios.post("/api/products", item).then(this.getFromDB);
  }

  render() {
    console.log("INVENTORY", this.state.inventory);
    const mappedInventory = this.state.inventory.map((element, index) => {
      return (
        <div>
          <div>
            <Product
              inv={this.inventory}
              key={index}
              element={element}
              updateById={this.updateById}
              deleteById={this.deleteById}
            />
          </div>
        </div>
      );
    });
    return <div>{mappedInventory}</div>;
  }
}
