let connection;


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
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'g') {
    connection.write("Say: gg");
  }
  if (key === 'n') {
    connection.write("Say: Nice Save!");
  }
  if (key === 'o') {
    connection.write("Say: Oops");
  }
};

module.exports = {setupInput};
