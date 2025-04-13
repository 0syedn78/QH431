import express from "express";
const app = express();
app.use(express.json());

app.set("view engine","ejs");

app.get("/", (req, res) => {
  // This points to your home page (index.ejs), fill it out ith some interesting text and images
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  // This Route points to your about.ejs file
  // You need to update that page with some dynamic/static contents
  res.render("pages/about");
});
app.get("/staff", (req, res) => {
  // Here you have to include the code to implement the Staff list in card layout functionality
  const staff=[];
  res.render("pages/staff",{staff});
});
app.get("/courses", (req, res) => {
  // Here you have to include the code to implement listing the online courses card display functionality
  const courses=[];
  res.render("pages/courses",{courses});
});
app.get("/faq", (req, res) => {
  // Here you have to include the code to implement the Frequently asked Questions (FAQ) functionality
  // We aill use some demo data to simulate data retreived from the database and fed to the corresponding template file
  const faqs =[
    {
    "question":"This is the Text for Question 1",
    "answer":"Here the answer to Question 1"
    },
    {
      "question":"This is the Text for Question 2",
      "answer":"Here the answer to Question 2"
      },
      {
        "question":"This is the Text for Question 3",
        "answer":"Here the answer to Question 3"
        }
      ]; 
  res.render("pages/faq",{faqs});
});

app.get("/contact", (req, res) => {
  // This points to your contact us web page (contact.ejs), fill it out ith some interesting text and images
  res.render("pages/contact");
});

app.post("/submit", (req, res) => {
// Here you have to include the code to implement the contact us form submissionfunctionality  
  res.render("pages/contact");
});

  app.listen(3000, () => {
    console.log("server is online Running at Port 3000.");
  });
  