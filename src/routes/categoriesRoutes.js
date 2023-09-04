const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/categoriesController.js');

router.get('/categories', CategoriesController.getAllCategories);
router.get('/categories/:id', CategoriesController.getCategoryById);
router.post('/categories', CategoriesController.createCategory);
// router.put('/:id', CategoriesController.updateUser);
// router.delete('/:id', CategoriesController.deleteUser);

module.exports = router;