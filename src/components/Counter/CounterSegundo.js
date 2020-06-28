import React from "react";

import css from "./couter.module.css";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import Value from "./Value";
import Steps from "./Steps";

export default function CounterSegundo(props) {
  const handleButtonClick = (clickType) => {
    props.onCount(clickType);
  };
  const { countValue, steps } = props;
  return (
    <div className={css.counterContainer}>
      <DecrementButton onDecrement={handleButtonClick} />
      <Value value={countValue} />
      <IncrementButton onIncrement={handleButtonClick} />
      <Steps currentSteps={steps} />
    </div>
  );
}
