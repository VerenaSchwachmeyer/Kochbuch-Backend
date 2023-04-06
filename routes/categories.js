const { Router } = require("express");
const categories = Router();
const pool = require("../db");

categories.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("select * from category;");
    res.json(rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

categories.get("/category/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(
      `SELECT * from "recipes"
      JOIN join_cat_rec ON join_cat_rec.rec_id = recipes.id 
      WHERE join_cat_rec.cat_id = (
      SELECT category.id from category 
      WHERE category.id = $1);`,
      [id]
    );
    res.json(rows);
  } catch (err) {
    res.sendStatus(500);
  }
});

categories.get("/search", async (req, res, next) => {
  const { text } = req.query;
  try {
    const { rows } = await pool.query(
      `select * from recipes WHERE recipes.name LIKE $1;`,
      [text]
    );
    res.json(rows);
  } catch (err) {
    next();
    res.sendStatus(500);
  }
});

categories.post("/submit", async (req, res, next) => {
  const { title, ingredients, preps } = req.body.input;
  try {
    const { rows } = await pool.query(
      `INSERT INTO recipes (name, ingredients, preparations) VALUES ( $1,  $2, $3);`,
      [title, ingredients, preps]
    );
    res.json(rows);
  } catch (err) {
    next();
    res.sendStatus(500);
  }
});

module.exports = categories;

// `SELECT * from "recipes"
// JOIN cats4reci ON cats4reci.id_reci = recipes.id
// WHERE cats4reci.id_cat = (
// SELECT category.id from category
// WHERE category.name = $1);`,
