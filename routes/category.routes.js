const {
    createCategory,
    deleteCategory,
    updateCategory,
    getCategories,
    getCategory,
} = require("../controllers/category.controllers")

const router = require("express").Router();

router.post("/", createCategory)
router.delete("/:categoryId", deleteCategory)
router.put("/:categoryId", updateCategory)
router.get("/", getCategories);
router.get("/:categoryId", getCategory);

module.exports = router;