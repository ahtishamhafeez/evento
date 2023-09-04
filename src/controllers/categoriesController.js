const Category = require('../models/category');
const mongoose = require('mongoose');

//  Get all categories
// async function getAllCategories(req, res) {
//   try {
//     const categories =  await Category.find();
//     res.json(categories);
//   }catch (error){
//     res.status(400).json({ error: 'Categories are not available' });
//   }
// }

// Get Category by its id
async function getCategoryById(req, res) {
  console.log('****************************', req.params.id)
  try {
    let categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (!category) {
      res.status(404).json('Category not found');
    }else{
      res.json(category);
    }
  } catch (error) {
    res.status(400).json({ error: 'Error fetching category by ID:'});
  }
}

// Create Category
async function createCategory(req, res) {
  console.log('****************************', req.params.id)
  try {
    const categoryData = req.body;
    const category = Category.create(categoryData);
    if (category) {
      res.send(category);
    }else{
      res.status(404).json('Category not found');
    }
  } catch (error) {
    res.status(400).json({error: 'Error in creating the record'});
  }
}
// 
module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory
};