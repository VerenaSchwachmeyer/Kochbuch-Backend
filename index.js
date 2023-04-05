const app = require("./app");
const port = 8080;

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello Kochbuch");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
