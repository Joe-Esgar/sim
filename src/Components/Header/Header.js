import React, { Component } from "react";

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
      </div>
    );
  }
}
