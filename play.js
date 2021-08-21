//base module to launch app, uses required modules to get desired outputs in app

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

const conn = connect();

setupInput(conn);
