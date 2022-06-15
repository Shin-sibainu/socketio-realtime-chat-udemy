const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("Hello Socket.io");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
