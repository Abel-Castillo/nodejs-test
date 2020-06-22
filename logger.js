const EventEmitter = require("events");

class Logger extends EventEmitter {
  log = (message) => {
    console.log(message);
    this.emit("event", { name: "Abel" });
  };
}

module.exports = Logger;
