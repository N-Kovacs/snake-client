let connection;
const { MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MOVE_UP_KEY} = require("./constants");

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
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === 'g') {
    connection.write("Say: Well Played");
  }
  if (key === 'n') {
    connection.write("Say: Nice Save!");
  }
  if (key === 'o') {
    connection.write("Say: Oops");
  }
};

module.exports = {setupInput};
