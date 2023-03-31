const { Router } = require("express");
const categories = Router();
const pool = require("../db");

categories.get("/all", async (req, res) => {
  console.log(pool);
  try {
    const { rows } = await pool.query("select * from category;");
    res.json(rows);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = categories;
