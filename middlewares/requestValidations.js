const validate = (err, req, res, next) => {
  let isValid = true;
  if (err) {
    res.send({ error: err.message });
    isValid = false;
  } else {
    if (req.body === undefined) {
      res.send("INVALID request body");
      isValid = false;
    } else if (req.body.count <= 0) {
      res.send("Count should be posive numer");
      isValid = false;
    }
    if (isValid) next();
  }
};

module.exports.validate = validate;
