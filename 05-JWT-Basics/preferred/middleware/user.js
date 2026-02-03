const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = { name: payload.name };
    req.password = { password: payload.password };

    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = authMiddleware;
