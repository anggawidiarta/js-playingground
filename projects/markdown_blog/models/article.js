// Importing required modules
const mongoose = require("mongoose");
const { marked } = require("marked");
const slugify = require("slugify");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");

// Creating a new instance of DOMPurify
const dompurify = createDomPurify(new JSDOM().window);

// Defining the schema for the Article model
const articleSchema = new mongoose.Schema({
  // Title of the article
  title: {
    type: String,
    required: true,
  },
  // Description of the article
  description: {
    type: String,
    required: true,
  },
  // Markdown content of the article
  markdown: {
    type: String,
    required: true,
  },
  // Date when the article was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // URL-friendly version of the article's title
  slug: {
    type: String,
    require: true,
    unique: true,
  },
  // Sanitized HTML version of the markdown content
  sanitizedHtml: {
    type: String,
    required: true,
  },
});

// Function to run before validating the article
articleSchema.pre("validate", function (next) {
  // If there's a title, generate a slug from it
  if (this.title) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
    });
  }

  // If there's markdown content, sanitize it and convert it to HTML
  if (this.markdown) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
  }

  // Continue with the validation
  next();
});

// Exporting the Article model
module.exports = mongoose.model("Article", articleSchema);
