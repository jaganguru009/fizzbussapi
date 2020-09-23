const express = require("express");
const { route } = require("../routes/routes");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("working...");
});
router.post("", (req, res) => {
  const fizzArray = [];

  for (var i = 1; i < req.body.count + 1; i++) {
    if (i % 15 == 0) {
      fizzArray.push("FizzBuzz");
    } else if (i % 3 == 0) {
      fizzArray.push("Fizz");
    } else if (i % 5 == 0) {
      fizzArray.push("Buzz");
    } else {
      fizzArray.push(i);
    }
  }
  res.send(fizzArray);
});

module.exports = router;
