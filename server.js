const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ShortUrl = require("./models/shortUrl.js");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/manage", (req, res) => {
  res.render("manage");
});

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls });
});







app.post("/manage", (req, res) => {
   const add=req.body.addto;
  
   console.log(add)
  
  })

   

  














app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ original: req.body.fullUrl });

  res.redirect("/");
});



app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.count++;
  shortUrl.save();
  
  

  res.redirect(shortUrl.original);
});

app.listen(process.env.PORT || 5000);
