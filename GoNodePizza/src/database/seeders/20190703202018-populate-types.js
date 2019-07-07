"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "product_types",
      [
        // Pizzas
        {
          id: 1,
          product_id: 1,
          name: "Portuguesa",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pizzas/1.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          product_id: 1,
          name: "Calabresa",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pizzas/2.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          product_id: 1,
          name: "Frango Frito",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pizzas/3.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          product_id: 1,
          name: "Marguerita",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pizzas/4.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          product_id: 1,
          name: "Mafiosa",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pizzas/5.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          product_id: 1,
          name: "Quatro Queijos",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pizzas/6.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        // Massas
        {
          id: 7,
          product_id: 2,
          name: "Ao Sugo",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/massas/sugo.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          product_id: 2,
          name: "Ao Funghi",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/massas/funghi.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          product_id: 2,
          name: "Ao Alho e Óleo",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/massas/alho.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          product_id: 2,
          name: "Aos Quatro Queijos",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/massas/queijo.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        // Calzones
        {
          id: 11,
          product_id: 3,
          name: "Pepperoni",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/calzones/pepperoni.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 12,
          product_id: 3,
          name: "Quatro Queijos",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/calzones/queijo.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        // Bebidas
        {
          id: 13,
          product_id: 4,
          name: "Coca-Cola",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/bebidas/coca.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 14,
          product_id: 4,
          name: "Água",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/bebidas/aguas.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 15,
          product_id: 4,
          name: "Chá Gelado",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/bebidas/icetea.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 16,
          product_id: 4,
          name: "Red Bull",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/bebidas/energeticos.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        //Bebidas alcoolicas
        {
          id: 17,
          product_id: 5,
          name: "Cerveja",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/alcool/cervejas.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 18,
          product_id: 5,
          name: "Vinho",
          preview:
            "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/alcool/vinhos.jpg",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("product_types", null, {});
  }
};
