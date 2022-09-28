let connection;
let lastkey = "Move: left"
let automove

const { MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MOVE_UP_KEY, messages} = require("./constants");

const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {

  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
    lastkey = "Move: up"
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
    lastkey = "Move: right"
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
    lastkey = "Move: left"
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
    lastkey = "Move: down"
  }
  if (messages[key]) {
    connection.write(messages[key])
  }

  clearInterval(automove)
  automove = setInterval(function () {connection.write(lastkey)}, 50);

  

  

};

module.exports = {setupInput};
