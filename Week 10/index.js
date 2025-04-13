const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new sqlite3.Database("./myDB.db", (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the SQLite database.");
    }
  });
  
  app.set("view engine", "ejs");
  app.use(express.static("views"));

/* Creating the DB for the first time (Run it ONCE, then comment it)

const db= new sqlite3.Database('./myDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
        } else if (err) {
            console.log("Getting error " + err);
            exit(1);
    }
    runQueries(db);
});

function createDatabase() {
    var newdb = new sqlite3.Database('myDB.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
    });
}

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS staff (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      department TEXT NOT NULL
    )`, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Table "staff" created successfully.');
      }
    });
  });
  
  // Close the database connection
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
  });
*/

app.get("/", (req, res) => {
    const err=[];
    res.render("index");
  });

app.get("/staff", (req, res) => {
  db.all("SELECT * FROM staff",(error, results)=>{
    res.render("staff", {results: results});
  });

/*  The same code with Error Detection and User-Friendly messages

    const query = "SELECT * FROM staff"; 
    db.all(query, (error, results) => {
      if (error) {
        console.error("Error fetching STAFF info:", error.message);
        res.status(500).send("Internal Server Error");
      } else {
        res.render("staff", { results: results });
      }
    });
*/

  });

  app.post('/staff', (req, res) => {
    db.run("INSERT INTO staff(name, department) VALUES(?,?)", [req.body.name, req.body.department],(error, results)=>{
      res.render("addstaff", {err: error});
  });

  /* Implementation with Error Checking and User-Friendly messages

    // Destructure 'name' and 'department' properties from the request body
    const { name, department } = req.body;
  console.log(name, department);
    if (!name || !department) {
      return res.status(400).send('Name and department are required.');
    }
  
    // Insert into the SQLite database
    const query = `INSERT INTO staff (name, department) VALUES (?, ?)`;
    db.run(query, [name, department], function (err) {
      if (err) {
        console.error('Error inserting data:', err.message);
        return res.status(500).send('Failed to insert data.');
      }
      res.status(201).send(`Staff member added with ID: ${this.lastID} `);
    });
    */
  });
  
app.listen(3000, () => {
    console.log("Server started at Port 3000");
  });
  

