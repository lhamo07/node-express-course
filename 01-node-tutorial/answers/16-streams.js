const { createReadStream } = require("fs");
const stream = createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200,
});
let chunkCount = 0;

stream.on("data", (chunk) => {
  chunkCount++;
  console.log(chunk);
});

stream.on("end", () => {
  console.log(`\nTotal chunks received: ${chunkCount}`);
});

stream.on("error", (err) => {
  console.error("Error:", err);
});
