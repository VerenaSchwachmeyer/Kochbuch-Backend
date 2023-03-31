const express = require("express");
const app = express();
const categories = require("./routes/categories");
// const cors = require("cors");

// // whitelist
// const whitelist = ["http://localhost:3000", "http://localhost:3001"];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

// app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/category", categories);
// app.use(cors());

const port = 3000;

module.exports = app;
