const express = require("express");
const bodyParser = require("body-parser");
const validate = require("./middlewares/requestValidations").validate;
const routes = require("./routes/routes");
const PORT = process.env.PORT || 3000;
const app = express();
try {
  app.use(bodyParser.json({ urlencoded: true }));

  //app.all("*", validate);
  app.use("/api", validate, require("./routes/routes"));
} catch (e) {
  console.log("Eror occucered " + err);
}

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error while running the server on Port  ${PORT}`);
  } else console.log(`Server started on   ${PORT}`);
});
