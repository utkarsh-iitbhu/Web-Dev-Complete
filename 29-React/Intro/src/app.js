import React from "react";
import ReactDOM from "react-dom";

const name = "Sahu";
console.log("Is it working");
// ReactDOM.render(<h1>Hello {name}</h1>, document.getElementById("root"));
ReactDOM.render(
  <div>
    <h1 className="heading">Hello {name}</h1>
    <p>Whats up</p>
    <li>Check</li>
  </div>,
  document.getElementById("root")
);
