const express = require('express');
const router = express.Router();
const categoryController = require('../category/category.controller');

router.post('/category', categoryController.createCategory)
router.put('/category/:id', categoryController.updateCategory)
router.delete('/category/:id', categoryController.deleteCategory)
router.get('/categories', categoryController.getCategories)
router.get('/category/:id', categoryController.getCategory)
// router.get('/categories', categoryController.getCategoriesByQuery)

module.exports = router;