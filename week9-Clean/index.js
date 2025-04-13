const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");

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
  res.render("pages/index");
  //res.render("index", {name: "Darren"});
});

app.get("/about", (req, res) => {
  res.render("pages/about");
  //about.ejs should include static information about the application
});

// Since we are retreiving information from the FAQ table, we use app.get

app.get("/faq", (req, res) => {
  const query = "SELECT * FROM faqs"; // Assumes a table named FAQs with relevant columns
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Error fetching FAQs:", err.message);
      res.status(500).send("Internal Server Error");
    } else {
      //res.json(rows);
      //console.log(rows);
      res.render("pages/faqs", { rows });
    }
  });
});

app.get("/contact", function (req, res) {
  res.render("pages/contact-form",{ message: 'Thank you for submitting the form!' });
});
// Form POST route with Form Validation
app.post("/submit", (req, res) => {
  const errors = validationResult(req);
  
  const { fname, lname, email, country, subject, message } = req.body;
  /* console.log("Received data:", {
    fname,
    lname,
    email,
    country,
    subject,
    message,
  });
  */
  // Save form data to the database
  db.run(
    `INSERT INTO contacts (fname, lname, email, country, subject, message) VALUES (?, ?, ?,?, ?, ?)`,
    [fname, lname, email, country, subject, message],
    function (err) {
      if (err) {
        console.error(err.message);
        res.status(500).send("Internal server error");
      } else {
        res.send("Thank you for contacting us!");
      }
    }
  );
});

app.get("/products", (req, res) => {
  const query = "SELECT * FROM products";
  // Assumes a table named Products with relevant columns
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Error fetching FAQs:", err.message);
      res.status(500).send("Internal Server Error");
    } else {
      //res.json(rows);
      //console.log(rows);
      res.render("pages/products", { rows });
    }
  });
});

app.listen(3000, () => {
  console.log("Server started at Port 3000");
});
