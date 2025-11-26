const EventEmitter = require("events");

const customEmitter = new EventEmitter();
customEmitter.on("greet", (name) => {
  console.log(`Hi ${name}`);
});

customEmitter.emit("greet", "Tenzin");
customEmitter.emit("greet", "Taylor");
