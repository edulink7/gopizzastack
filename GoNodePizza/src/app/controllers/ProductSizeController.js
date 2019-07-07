const {ProductSize} = require('../models')

class ProductSizeController {
  async store (req, res) {
    
    const product_Size = await ProductSize.create(req.body)

    return res.json(product_Size)
  }

  async index (req, res) {
    const { type_id } = req.params
    const product_sizes = await ProductSize.findAll({ where: { type_id } })

    return res.json(product_sizes)
  }
}

module.exports = new ProductSizeController()
