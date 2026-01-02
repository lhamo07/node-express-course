const { products } = require("./data");

const express = require("express");
const app = express();
console.log("Express Tutorial");
app.use(express.static("./public"));

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
  let searchUser = [...products];
  const limitNum = Number(limit);
  const priceNum = Number(price);
  if (limit && (isNaN(limitNum) || limitNum <= 0)) {
    return res
      .status(400)
      .json({ message: "Limit must be a positive number!" });
  }
  if (price && (isNaN(priceNum) || priceNum <= 0)) {
    return res
      .status(400)
      .json({ message: "Price must be a non-negative number!" });
  }

  if (search) {
    const searchToLower = search.toLowerCase();
    searchUser = searchUser.filter((product) => {
      return product.name.toLowerCase().startsWith(searchToLower);
    });
  }
  if (price) {
    searchUser = searchUser.filter((product) => product.price < priceNum);
  }
  if (limit) {
    searchUser = searchUser.slice(0, parseInt(limitNum));
  }

  res.json({ products: searchUser });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
app.all("*", (req, res) => {
  res.status(404).json({ message: "Not Found!" });
});
