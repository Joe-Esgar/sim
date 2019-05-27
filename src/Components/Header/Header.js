import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <img
          className="Logo"
          src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/chevron-circle-down-512.png"
        />

        <h1>SHELFIE</h1>
        <NavLink activeClassName="active" exact to="/">
          Inventory
        </NavLink>
        <NavLink activeClassName="active" to="/form">
          Form
        </NavLink>
      </div>
    );
  }
}
