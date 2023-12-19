const express = require("express");
const router = express.Router();
// Importing the Article model
const Article = require("../models/article");

// Route to render the form for creating a new article
router.get("/new", (req, res) => {
  // Rendering the 'new' view and passing a new Article instance as a local variable
  res.render("articles/new", { article: new Article() });
});

router.get("/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  // Rendering the 'new' view and passing a new Article instance as a local variable
  res.render("articles/edit", { article: article });
});

// Route to handle the request for a specific article by its ID
router.get("/:slug", async (req, res) => {
  // Fetching the article from the database using the ID from the request parameters
  const article = await Article.findOne({ slug: req.params.slug });
  // If no article is found, redirect to the home page
  if (article == null) {
    res.redirect("/");
  }
  // Rendering the 'show' view and passing the fetched article as a local variable
  res.render("articles/show", { article: article });
});

// Route to handle the form submission for creating a new article
router.post(
  "/",
  async (req, res, next) => {
    req.article = new Article();
    next();
  },
  saveArticleAndRedirect("new")
);

router.put(
  "/:id",
  async (req, res, next) => {
    req.article = await Article.findById(req.params.id);
    next();
  },
  saveArticleAndRedirect("edit")
);

router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article;
    article.title = req.body.title;
    article.description = req.body.description;
    article.markdown = req.body.markdown;

    try {
      // Attempting to save the new article to the database
      article = await article.save();
      // If successful, redirect to the page of the newly created article
      res.redirect(`/articles/${article.slug}`);
    } catch (e) {
      // If an error occurs, re-render the form view with the current data
      console.log(e);
      res.render(`articles/${path}`, { article: article });
    }
  };
}

// Exporting the router to be used in other parts of the application
module.exports = router;
