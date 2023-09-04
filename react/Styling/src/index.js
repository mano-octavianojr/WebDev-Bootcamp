//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const custStyle = {
  color: "red"
};

const date = new Date().getHours();

if (date >= 12 && date < 18) {
  custStyle.color = "green";
} else if (date >= 18 && date < 12) {
  custStyle.color = "green";
}

console.log("date " + date);
ReactDOM.render(
  <h1 className="heading" style={custStyle}>
    {" "}
    Hello World{" "}
  </h1>,
  document.getElementById("root")
);
