import React from "react";

function Caption(props) {
  return (
    <h1 id="primitivo-logo">
      <a href="https://github.com/guandjoy/primitivo-svg">
        <span>Primitivo-SVG</span>
      </a>{" "}
      | {props.topic}
    </h1>
  );
}

export default Caption;
