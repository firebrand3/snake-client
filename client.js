const net = require("net");

const connect = function() {
  let delay = 0;

  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write('Name: AMA');
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

  
 conn.on('data', (data) => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

module.exports = {connect};