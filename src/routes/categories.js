const express = require("express");
const router = express.Router();
const loginfunction = require("../midleweare/login");
const { createCategory } = require("../controllers/categories/create");
const { getAllCategories } = require("../controllers/categories/retrieve");
const { deleteCategory } = require("../controllers/categories/delete");

// Create category
router.post("/add", loginfunction, createCategory);
router.get("/", getAllCategories);
router.delete("/:id", loginfunction, deleteCategory);

module.exports = router;
