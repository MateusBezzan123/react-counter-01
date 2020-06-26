import React, { Component } from "react";
import css from "./couter.module.css";
export default class Value extends Component {
  render() {
    return <span className={css.counterValue}>{this.props.value}</span>;
  }
}
