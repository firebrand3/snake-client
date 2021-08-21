let connection;

//function to manage user input
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //nested function to define input behaviour
  const handleUserInput = function(key) {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "d") {
      connection.write("Move: right");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
    if (key === "z") {
      connection.write("Say: fun fun fun");
    }
    if (key === "x") {
      connection.write("Say: feed me...");
    }
  };

  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = { setupInput };
