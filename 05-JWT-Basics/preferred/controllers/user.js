const jwt = require("jsonwebtoken");

const logonuser = (req, res) => {
  const { name, password } = req.body;
  const token = jwt.sign({ name, password }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });

  res.status(200).json({ token });
};
const getHello = (req, res) => {
  res.status(200).json({ msg: `${req.user.name} is logged in` });
};
module.exports = { logonuser, getHello };
