const Category = require("../../models/categories.schema");

const createCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).json({ message: "Category is created", newCategory });
    } catch (error) {
        res.status(500).json({ message: "Category is not created", error });
    }
};

module.exports = { createCategory };
