const {Product} = require('../models')

class ProductController {
  async store (req, res) {
    
    const product = await Product.create(req.body)

    return res.json(product)
  }

  async index (req, res) {
    const products = await Product.findAll()

    return res.json(products)
  }
}

module.exports = new ProductController()
