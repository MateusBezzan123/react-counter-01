import React, { Component, Fragment } from "react";
import Counter from "./components/Counter/Counter";
import CounterSegundo from "./components/Counter/CounterSegundo";
import Band from "./components/Band";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 3,
      steps: 0,
    };
  }
  handleCount = (clickType) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter:
        clickType === "+" ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };
  render() {
    const { currentCounter, steps } = this.state;
    return (
      <Fragment>
        <h3>Band</h3>
        <Band />
        <h3>Counter</h3>
        <Counter />
        <Counter />
        <Counter />
        <h2>Segundo Counter</h2>
        <CounterSegundo
          onCount={this.handleCount}
          countValue={currentCounter}
          currentSteps={steps}
        />
        <CounterSegundo
          onCount={this.handleCount}
          countValue={currentCounter}
          currentSteps={steps}
        />
        <CounterSegundo
          onCount={this.handleCount}
          countValue={currentCounter}
          currentSteps={steps}
        />
      </Fragment>
    );
  }
}
