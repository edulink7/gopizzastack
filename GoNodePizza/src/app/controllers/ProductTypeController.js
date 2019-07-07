const {ProductType} = require('../models')

class ProductTypeController {
  async store (req, res) {
    
    const product_type = await ProductType.create(req.body)

    return res.json(product_type)
  }

  async index (req, res) {
    const { product_id } = req.params
    const product_types = await ProductType.findAll({ where: { product_id } })

    return res.json(product_types)
  }
}

module.exports = new ProductTypeController()
