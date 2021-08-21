const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write("Name: AMA");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 200);  // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
  });

  //  conn.on('connect', () => {
  //     conn.write("Move: up");
  //     conn.write("Move: down");
  //     conn.write("Move: left");
  //     conn.write("Move: right");
  //   });

  conn.on("data", (data) => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

module.exports = { connect };
