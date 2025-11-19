const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home");
  }
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
