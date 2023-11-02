import React from "react";
import ReactDOM from "react-dom";
import { ReactP5Wrapper } from "react-p5-wrapper";

// example of a simple sketch inline:
// const sketch = (p) => {
//   p.setup = function () {
//     p.createCanvas(400, 200);
//     p.background(200);
//   };

//   p.draw = function () {
//     p.fill(255, 0, 0);
//     p.ellipse(50, 50, 50, 50);
//   };
// };

// but we will import from sketches
import sketch from "./sketches/sketch.js";

const socket = new WebSocket("ws://localhost:3001");

function App() {
  const [ascii, setAscii] = React.useState("");
  
  socket.onmessage = (event) => {
    // Here, event.data will have the data sent from the server.
    // Update your state or p5.js sketch with the received data.
    const ascii = event.data;
    console.log("data", event.data);
    setAscii({text: event.data});
  };
  
  return (
    <div className="App">
      <h1>React and p5.js Integration</h1>
      <h2>super-serial-app</h2>
      <p>In the Arduino IDE, run File {">"} Examples {">"} Communication {">"} ASCIITable.<br />Update the path to your serial port on line 19 of server.js. </p>
      <div className="content">
        <p>This is HTML representation of the serial through: {ascii.text}</p>
      </div>
      <p>Below in the ReactP5Wrapper the same serial data is displayed.</p>
      <ReactP5Wrapper sketch={sketch} ascii={ascii}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
