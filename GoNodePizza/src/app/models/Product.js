module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      name: DataTypes.STRING, 
      display: DataTypes.STRING, 
      description: DataTypes.STRING,
      minutes: DataTypes.INTEGER,
      preview: DataTypes.STRING
    })
  
    /*Product.associate = models => {
      Product.belongsTo(models.User, { foreignKey: 'user_id' })
      Product.belongsTo(models.User, { foreignKey: 'provider_id' })
    }*/

    //Product.hasMany(models.ProductType)
  
    return Product
  }
  