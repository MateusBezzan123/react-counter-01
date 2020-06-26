import React, { Component } from "react";

import css from "./couter.module.css";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import Value from "./Value";
import Steps from "./Steps";

export default class counter extends Component {
  handleButtonClick = (clickType) => {
    this.props.onCount(clickType);
  };

  render() {
    const { countValue, steps } = this.props;
    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />
        <Value value={countValue} />
        <IncrementButton onIncrement={this.handleButtonClick} />
        <Steps currentSteps={steps} />
      </div>
    );
  }
}
