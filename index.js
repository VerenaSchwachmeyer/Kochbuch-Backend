const app = require("./app");
const port = process.env.PORT || 8080;

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello Kochbuch");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
