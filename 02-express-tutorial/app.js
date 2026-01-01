const { products } = require("./data");
const express = require("express");
const app = express();
let peopleRouter = require("./routes/people");
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toLocaleString();
  console.log(method, url, time);
  next();
};
app.use(logger);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/people", peopleRouter);

app.use(express.static("./methods-public"));
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.send(`Welcome ${name}`);
  } else {
    res.status(401).send("Please provide credentials");
  }
});

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It works!" });
});
app.get("/api/v1/products", (req, res) => {
  res.json({ products });
});
app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  if (product) {
    res.json({ product });
  } else {
    return res.status(404).json({ message: "That product was not found!" });
  }
});
app.get("/api/v1/query", (req, res) => {
  const { search, limit, price } = req.query;
  let searchUser = [...products]; // start with all products

  if (search) {
    searchUser = searchUser.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (price) {
    searchUser = searchUser.filter((product) => product.price < Number(price));
  }
  if (limit) {
    searchUser = searchUser.slice(0, parseInt(limit));
  }

  res.json({ searchUser });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Not Found!" });
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
