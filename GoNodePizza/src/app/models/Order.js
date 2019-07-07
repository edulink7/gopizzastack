module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      date: DataTypes.DATE,
      observation: DataTypes.STRING,
      cep: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.STRING,
      district: DataTypes.STRING,
      items: DataTypes.ARRAY(DataTypes.INTEGER),
      total: DataTypes.FLOAT
    },
    /*{
      instanceMethods: {
        getItems: function(){
            return Order.findAll({
                where: {
                    id: { $in: this.get('items') }
                }
            }).then(items => {
                return items;
            });
        },
        setItems: function(ids){
            return this.setDataValues('items', ids).save().then(self => {
                return self;
            });
        }
      }
    }*/
  );
  
    Order.associate = models => {
      Order.belongsTo(models.User, { foreignKey: 'user_id' })
      //Product.belongsTo(models.ProductSize, { foreignKey: 'size_id' })
      //Should we use has many?
      //Order.hasMany(models.ProductSize);
    }

    /*Order.prototype.getItems = function(){
      return Order.findAll({
          where: {
              id: { $in: this.get('items') }
          }
      }).then(items => {
          return items;
      });
    }*/
  
    return Order
  }
  