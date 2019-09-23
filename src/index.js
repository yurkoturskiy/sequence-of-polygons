import React from "react";
import ReactDOM from "react-dom";

import GitHubLogo from "./GitHubLogo";
import Caption from "./Caption";
import Composition from "./Composition";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <a href="https://github.com/guandjoy/sequence-of-polygons">
        <GitHubLogo />
      </a>
      <Caption topic="Sequence of polygons" />
      <Composition />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
