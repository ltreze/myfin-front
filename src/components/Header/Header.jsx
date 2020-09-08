import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return <h3 className="header_h3">{this.props.title}</h3>;
  }
}

export default Header;
