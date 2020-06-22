// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("event", (arg) => {
//   console.log(arg);
// });
// logger.log("hello");

const http = require("http");
const server = http.createServer();
server.on("connection", (socket) => {
  console.log("New onnection...");
});
server.listen("3000");
