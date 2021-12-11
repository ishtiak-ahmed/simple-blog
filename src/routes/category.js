const express = require('express');
const router = express.Router();
const categoryController = require('../category/category.controller');
const { isAuthenticated } = require('../user/user.controller');

router.post('/category', isAuthenticated, categoryController.createCategory)
router.put('/category/:id', isAuthenticated, categoryController.updateCategory)
router.delete('/category/:id', isAuthenticated, categoryController.deleteCategory)
router.get('/categories', categoryController.getCategories)
router.get('/category/:id', categoryController.getCategory)
// router.get('/categories', categoryController.getCategoriesByQuery)

module.exports = router;