require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());
app.get("/hello", (req, res) => {
  res.send("Hello World from Task Manager App");
});
app.use("/api/v1/tasks", tasks);
const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.DB_CONNECT);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
