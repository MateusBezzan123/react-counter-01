import React from "react";

import css from "./couter.module.css";

export default function Steps(props) {
  return <span className={css.counterValue}>({props.currentSteps})</span>;
}
