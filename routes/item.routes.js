const {
    getItems,
    createItem,
    getItem,
    deleteItem,
    updateItem,
    getItembyCategory,
} = require("../controllers/item.controllers");

const router = require("express").Router();

router.get("/", getItems);
router.get('/:categoryId/category', getItembyCategory)
router.get('/:itemId', getItem)
router.delete("/:itemId", deleteItem);
router.put("/:itemId", updateItem);
router.post("/", createItem);

module.exports = router;