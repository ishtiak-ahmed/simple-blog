const categoryService = require('./category.service')

module.exports.createCategory = async (req, res) => {
  const body = req.body;
  const createdCategory = await categoryService.createCategory(body)
  res.status(200).json(createdCategory)
}

module.exports.updateCategory = async (req, res) => {
  const category = req.body;
  const id = req.params.id;
  const updatedCategory = await categoryService.updateCategory(id, category)
  res.status(200).json(updatedCategory)
}

module.exports.deleteCategory = async (req, res) => {
  const id = req.params.id
  const category = await categoryService.deleteCategory(id)
  res.status(200).json(category)
}

module.exports.getCategory = async (req, res) => {
  const id = req.params.id;
  const category = await categoryService.getCategoriyById(id)
  res.status(200).json(category)
}

module.exports.getCategories = async (req, res) => {
  let categories;
  if (req.query) {
    categories = await categoryService.getCategoriesByQuery(req.query)
  } else {
    categories = await categoryService.getCategories()
  }
  res.status(200).json(categories)
}

module.exports.getCategoriesByQuery = async (req, res) => {
  const query = req.query
  const categories = await categoryService.getCategoriesByQuery(query)
  res.status(200).json(categories)
}

