import React, { Component } from "react";

import css from "./couter.module.css";

export default class counter extends Component {
  constructor() {
    super();
    this.currentCounter = 2;
  }

  handleCilck = () => {
    console.log("Click");
    this.currentCounter--;
  };

  render() {
    return (
      <div className={css.counterContainer}>
        <button
          onClick={this.handleCilck}
          className="waves-effect waves-light btn red darken-4"
        >
          -
        </button>
        <span className={css.counterValue}>{this.currentCounter}</span>
        <button className="waves-effect waves-light btn green darken-4">
          +
        </button>
      </div>
    );
  }
}
