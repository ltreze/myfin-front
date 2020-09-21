import React, { Component } from "react";
import "./style.css";

class Header extends Component {

  render() {
    return (
      <div className="header_h3">
        <h3 className="header_coisa">{this.props.title}</h3>
      </div>
    );
  }
}

export default Header;
