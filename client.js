//define client that will connect to server and will be used by play.js to communicate with server

const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write("Name: AMA");
  });

  conn.on("data", (data) => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

module.exports = { connect };
