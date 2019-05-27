import React, { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

import "./index.css";
import "./reset.css";

import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* <Dashboard /> */}
          <Route exact path="/" component={Dashboard} />
          {/* <Form postNew={this.postNew} getFromDB={this.getFromDB} /> */}
          <Route exact path="/form" component={Form} />
        </Switch>
      </div>
    );
  }
}
