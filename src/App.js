import React, { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";
import "./index.css";
import "./reset.css";

import { Switch, Routes } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
    this.getFromDB = this.getFromDB.bind(this);
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

  postNew(item) {
    axios.post("/api/products", item).then(this.getFromDB);
  }

  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Form postNew={this.postNew} getFromDB={this.getFromDB} />
      </div>
    );
  }
}
