const moment = require("moment");
const { Op } = require("sequelize");
const {
  Order,
  User,
  ProductSize,
  ProductType,
  Product,
  sequelize
} = require("../models");

class OrderController {
  async store(req, res) {
    const product_type = await Order.create(req.body);

    return res.json(product_type);
  }

  async index(req, res) {
    //const { product_id } = req.body
    //const date = moment(parseInt(req.body.date))
    const ordersDate = moment(req.body.date);

    User.hasMany(Order, { foreignKey: "user_id" });
    Order.belongsTo(User, { foreignKey: "user_id" });

    let orders = await Order.findAll({
      /*attributes: [
            'id',
          ],*/
      where: {
        date: {
          [Op.between]: [
            ordersDate.startOf("day").format(),
            ordersDate.endOf("day").format()
          ]
        }
      },
      include: [{ model: User, attributes: ["name", "email"] }],
      order: [["date", "DESC"]]
    });

    var results = [];
    for (let item in orders) {
      const products = await ProductSize.findAll({
        where: {
          id: {
            [Op.in]: orders[item].items
          }
        },
        include: [{ model: ProductType, include: [Product] }]
      });

      let orderItem = {
        data: orders[item],
        products: products
      };

      results.push(orderItem);
      //orders[item].products = products
      console.log("Order:", orders[item].id);
    }
    let response = {
      orders: results
    };

    return res.json(response);
  }

  async indexUser(req, res) {
    const { user_id } = req.params;
    const orders = await Order.findAll({
      where: { user_id },
      order: [["date", "DESC"]]
    });

    return res.json(orders);
  }
}

module.exports = new OrderController();
