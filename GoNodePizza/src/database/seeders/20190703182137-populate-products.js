"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          name: "Pizzas",
          display: "Pizza",
          description:
            "Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.",
          minutes: 30,
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pizza.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: "Massas",
          description:
            "10 tipos de massas com diferentes molhos para te satisfazer.",
          display: "Massa",
          minutes: 25,
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pasta.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: "Calzones",
          description:
            "Calzones super recheados com mais de 50 sabores diferentes.",
          display: "Calzone",
          minutes: 15,
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/calzone.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          name: "Bebidas não-alcóolicas",
          description: "Refrigerantes, sucos, chá gelado, energéticos e água.",
          display: "none",
          minutes: 5,
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/soda.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          name: "Bebidas alcóolicas",
          description: "Cervejas artesanais, vinhos e destilados.",
          display: "none",
          minutes: 5,
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/beer.png",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  }
};
