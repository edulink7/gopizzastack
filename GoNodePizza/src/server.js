require("dotenv").config();
const db = require("./app/models");

const express = require("express");
var cors = require("cors");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    //this.sentry()
    this.database();
    this.middlewares();
    this.routes();
    //this.exception()
  }

  /*sentry () {
      Sentry.init(sentryConfig)
    }*/

  database() {
    //Force sync on init?
    //db.sequelize.sync();
  }

  middlewares() {
    // The request handler must be the first middleware on the app
    //this.express.use(Sentry.Handlers.requestHandler())

    this.express.use(express.json());

    this.express.use(cors());
    /*this.express.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:3333");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });*/
  }

  routes() {
    this.express.use(require("./routes"));
  }

  /*exception () {
      if (process.env.NODE_ENV === 'production') {
        // The error handler must be before any other error middleware
        this.express.use(Sentry.Handlers.errorHandler())
      }

      this.express.use(async (err, req, res, next) => {
        if (err instanceof validate.ValidationError) {
          return res.status(err.status).json(err)
        }

        if (process.env.NODE_ENV !== 'production') {
          const youch = new Youch(err)

          return res.json(await youch.toJSON())
        }

        return res
          .status(err.status || 500)
          .json({ error: 'Internal Server Error' })
      })
    }*/
}

module.exports = new App().express;
