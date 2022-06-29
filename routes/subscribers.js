const express = require("express");
const router = express.Router();

//Getting all subs
router.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

module.exports = router;
