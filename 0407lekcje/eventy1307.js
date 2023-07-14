// event - ma się wykonać jak coś przyjdzie
// event - nasłuchiwanie na wydarzenie, i to co podamy później zostanie wykonane

const events = require("events");
const https = require("https");

const wlasneEvent = new events.EventEmitter();

wlasneEvent.on("scream", () => {
  console.log("Słyszę krzyk");
});

wlasneEvent.emit("scream"); //emituje scream

// w nod'zie
// emit.('data') // emitowanie wydarzenia data

https
  .get("https://facebook.com", (mes) => {
    mes.on("data", () => {});
    mes.on("end", () => {});
  })
  .on("error", () => console.log("Nie udało się "));
