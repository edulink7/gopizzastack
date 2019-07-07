module.exports = (sequelize, DataTypes) => {
    const ProductType = sequelize.define('ProductType', {
      name: DataTypes.STRING,
      //description: DataTypes.STRING,
      preview: DataTypes.STRING,
    })
  
    ProductType.associate = models => {
      ProductType.belongsTo(models.Product, { foreignKey: 'product_id' })
      //ProductType.hasMany(models.ProductSize)
    }
  
    return ProductType
  }
  