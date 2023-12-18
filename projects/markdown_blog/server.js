const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();

mongoose.connect("mongodb://localhost/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Article 1",
      createdAt: new Date(),
      description: "Test Description",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(5000);
