const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

// const UserController = require('./app/controllers/UserController')
// const SessionController = require('./app/controllers/SessionController')
const controllers = require('./app/controllers')
const validators = require('./app/validators')

routes.post(
  '/signup',
  validate(validators.User),
  handle(controllers.UserController.store)
)
routes.post(
  '/login/:source',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

// routes.get('/test', authMiddleware, (req, res) => res.json({ ok: true }))

// This will ensure that every route BELOW this line
// will require the user authentication (header)
routes.use(authMiddleware)

/**
 * Products
 */
routes.get('/products', handle(controllers.ProductController.index))
//routes.get('/product/:id', handle(controllers.ProductController.show))
routes.post(
  '/products',
  validate(validators.Product),
  handle(controllers.ProductController.store)
)
/*routes.put(
  '/products/:id',
  validate(validators.Product),
  handle(controllers.ProductController.update)
)
routes.delete('/products/:id', handle(controllers.ProductController.destroy))*/

/**
 * Product Types
 */
routes.get('/products/types/:product_id', handle(controllers.ProductTypeController.index))
//routes.get('/product/:id', handle(controllers.ProductController.show))
routes.post(
  '/products/types',
  validate(validators.ProductType),
  handle(controllers.ProductTypeController.store)
)

/**
 * Product Sizes
 */
routes.get('/products/sizes/:type_id', handle(controllers.ProductSizeController.index))
//routes.get('/product/:id', handle(controllers.ProductController.show))
routes.post(
  '/products/sizes',
  validate(validators.ProductSize),
  handle(controllers.ProductSizeController.store)
)

/**
 * Orders
 */
routes.post(
  '/order',
  validate(validators.Order),
  handle(controllers.OrderController.store)
)

routes.get('/orders/:user_id', handle(controllers.OrderController.indexUser))

/**
 * Web list orders
 */
routes.post(
  '/orders',
   validate(validators.DateOrders),
   handle(controllers.OrderController.index))

module.exports = routes
