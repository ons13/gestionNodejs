const categoryModels = require("../models/category.models")

const createCategory = async (req, res) => {
    const newCategory = new categoryModels({
        name: req.body.name,
    });
    try {
        const SavedCategory = await newCategory.save();
        return res.status(200).json(SavedCategory)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const updateCategory = async (req, res) => {
    const id = req.params.categoryId;
    try {
        const category = await categoryModels.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.status(200).json(category)
    } catch (er) {
        return res.status(500).json(er)
    }
}

const deleteCategory = async (req, res) => {
    const id = req.params.categoryId;
    try {
        const category = await categoryModels.findByIdAndDelete(id);
        return res.status(200).json(category);
    } catch (err) {
        return res.status(500).json(err);
    }
}
const getCategory = async (req, res) => {
    const id = req.params.categoryId;
    try {
        const category = await categoryModels.findById(id);
        return res.status(200).json(category);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await categoryModels.find();
        return res.status(200).json(categories);
    } catch (err) {
        return res.status(500).json(err);
    }
};


module.exports.createCategory = createCategory;
module.exports.deleteCategory = deleteCategory;
module.exports.updateCategory = updateCategory;
module.exports.getCategories = getCategories;
module.exports.getCategory = getCategory;