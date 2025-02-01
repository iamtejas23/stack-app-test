const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "mysql-service",
  user: "root",
  password: "password",
  database: "testdb",
});

db.connect(err => {
  if (err) console.error("DB Connection Failed", err);
  else console.log("DB Connected");
});

app.post("/add", (req, res) => {
  db.query("INSERT INTO items (name) VALUES ('New Item')", (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Item Added!" });
  });
});

app.listen(5000, () => console.log("Backend running on port 5000"));