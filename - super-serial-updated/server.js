const WebSocket = require("ws");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");
});

server.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const port = new SerialPort({ path: "/dev/cu.usbmodem101", baudRate: 9600 });
console.log("Serial port opened");
const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));
console.log("parse");

parser.on("data", (data) => {
  // console.log("data", data);
  // split into an array
  let dataArr = data.split(",");
  // console.log(dataArr);
  let text = "";

  // ignore [ 'ASCII Table ~ Character Map\r' ]
  if (dataArr.length > 1) {
    let decIndex = 1;
    let hexIndex = 2;
    let octIndex = 3;
    let binIndex = 4;

    // the first index is the text
    text = dataArr[0];

    // a comma requires a special update since we are splting on commas in line 12
    if (dataArr[0] == "" && dataArr[1] == "") {
      //console.log("it's a comma!")
      text = ",";
      decIndex = 2;
      hexIndex = 3;
      octIndex = 4;
      binIndex = 5;
    }

    // the second element is a key/value pair for dec
    let decArr = dataArr[decIndex].trim().split(":");
    let decKey = decArr[0];
    let decValue = decArr[1];

    //hex
    let hexArr = dataArr[hexIndex].trim().split(":");
    // get the keys and values and trim whitespace
    let hexKey = hexArr[0];
    let hexValue = hexArr[1];

    //oct
    let octArr = dataArr[octIndex].trim().split(":");
    // get the keys and values and trim whitespace
    let octKey = octArr[0];
    let octValue = octArr[1];

    //bin
    let binArr = dataArr[binIndex].trim().split(":");
    // get the keys and values and trim whitespace
    let binKey = binArr[0];
    let binValue = binArr[1];

    console.log(text, decValue, hexValue, octValue, binValue);
  }
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      // console.log(data);
      client.send(text);
    }
  });
});
