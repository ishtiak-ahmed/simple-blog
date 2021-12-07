const Category = require('./category.model')

module.exports.createCategory = async (category) => {
  return Category.create(category);
}

module.exports.updateCategory = async (categoryId, update) => {
  return Category.findByIdAndUpdate(categoryId, update, { new: true });
}

module.exports.deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
}

module.exports.getCategories = async () => {
  return Category.find({});
}

module.exports.getCategoriyById = async (id) => {
  return Category.findById(id);
}

module.exports.getCategoriesByQuery = async (query) => {
  return Category.find(query);
}

