const express = require("express");
const router = express.Router();

router.use("/fizz", require("../_api/fizz"));

module.exports = router;
