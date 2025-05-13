const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");


const db = new sqlite3.Database("wt431.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

app.set("view engine", "ejs");
app.use(express.static("views"));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/courses", (req, res) => {
  const query = "SELECT * FROM courses";
  // Assumes a table named Products with relevant columns
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Error fetching Courses:", err.message);
      res.status(500).send("Internal Server Error");
    } else {
      //res.json(rows);
      //console.log(rows);
      res.render("courses", { rows });
    }
  });
});


  app.get("/staff", (req, res) => {
    res.render("staff");
  });
  app.get("/live", (req, res) => {
    res.render("live");
  });
  app.get("/faqs", (req, res) => {
    res.render("faqs");
  });
  app.get("/contact", (req, res) => {
    res.render("contact");
  });

app.listen(3000, () => {
    console.log("Server started at Port 3000");
  });