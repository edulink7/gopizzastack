module.exports = (sequelize, DataTypes) => {
  const ProductSize = sequelize.define("ProductSize", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    preview: DataTypes.STRING,
    use_as_cart_img: DataTypes.BOOLEAN
  });

  ProductSize.associate = models => {
    ProductSize.belongsTo(models.ProductType, { foreignKey: "type_id" });
  };

  return ProductSize;
};
