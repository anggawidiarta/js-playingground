// Importing the 'express' framework to create a router
const express = require("express");
const router = express.Router();

// Importing the Article model from the models directory
const Article = require("../models/article");

// Route to render the form for creating a new article
router.get("/new", (req, res) => {
  // Rendering the 'new' view and passing a new Article instance as a local variable
  res.render("articles/new", { article: new Article() });
});

// Route to render the form for editing an existing article
router.get("/edit/:id", async (req, res) => {
  // Fetching the article with the specified ID from the database
  const article = await Article.findById(req.params.id);
  // Rendering the 'edit' view and passing the fetched article as a local variable
  res.render("articles/edit", { article: article });
});

// Route to handle the request for a specific article by its slug
router.get("/:slug", async (req, res) => {
  // Fetching the article from the database using the slug from the request parameters
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
    // Creating a new Article instance and attaching it to the request object
    req.article = new Article();
    next();
  },
  saveArticleAndRedirect("new")
);

// Route to handle the form submission for editing an existing article
router.put(
  "/:id",
  async (req, res, next) => {
    // Fetching the existing article with the specified ID from the database
    req.article = await Article.findById(req.params.id);
    next();
  },
  saveArticleAndRedirect("edit")
);

// Route to handle the deletion of an article by its ID
router.delete("/:id", async (req, res) => {
  // Deleting the article with the specified ID from the database
  await Article.findByIdAndDelete(req.params.id);
  // Redirecting to the home page after deletion
  res.redirect("/");
});

// Function to save an article to the database and redirect based on the provided path
function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article;
    // Updating the article properties with the submitted form data
    article.title = req.body.title;
    article.description = req.body.description;
    article.markdown = req.body.markdown;

    try {
      // Attempting to save the updated/new article to the database
      article = await article.save();
      // If successful, redirect to the page of the newly created/edited article
      res.redirect(`/articles/${article.slug}`);
    } catch (e) {
      // If an error occurs, log it and re-render the form view with the current data
      console.log(e);
      res.render(`articles/${path}`, { article: article });
    }
  };
}

// Exporting the router to be used in other parts of the application
module.exports = router;
