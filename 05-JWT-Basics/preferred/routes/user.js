const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/user");
const { logonuser, getHello } = require("../controllers/user");
router.route("/logon").post(logonuser);
router.route("/hello").get(authenticate, getHello);
module.exports = router;
