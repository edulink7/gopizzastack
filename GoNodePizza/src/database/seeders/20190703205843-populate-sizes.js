"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let all_sizes = [];

    /**
     * Pizzas
     */
    //Our pizzas (product_type) Ids
    const pizzas = [1, 2, 3, 4, 5, 6];
    //our pizza prices
    const prices = [
      //Portuguesa
      76.0,
      59.0,
      42.0,
      29.0,
      //Calabresa
      74.0,
      59.0,
      42.0,
      29.0,
      //Frango Frito
      72.0,
      59.0,
      42.0,
      29.0,
      //Marguerita
      72.0,
      59.0,
      42.0,
      29.0,
      //Mafiosa
      76.0,
      62.0,
      42.0,
      29.0,
      //Quatro Queijos
      78.0,
      63.0,
      42.0,
      29.0
    ];
    for (let index in pizzas) {
      const pizza_gg = {
        type_id: pizzas[index],
        name: "Gigante",
        price: prices[index * 4],
        description: "Tamanho:",
        preview:
          "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pizzas/tamanho-gg.png",
        use_as_cart_img: false,
        created_at: new Date(),
        updated_at: new Date()
      };
      all_sizes.push(pizza_gg);

      const pizza_g = {
        type_id: pizzas[index],
        name: "Grande",
        price: prices[index * 4 + 1],
        description: "Tamanho:",
        preview:
          "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pizzas/tamanho-g.png",
        use_as_cart_img: false,
        created_at: new Date(),
        updated_at: new Date()
      };
      all_sizes.push(pizza_g);

      const pizza_m = {
        type_id: pizzas[index],
        name: "Média",
        price: prices[index * 4 + 2],
        description: "Tamanho:",
        preview:
          "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pizzas/tamanho-m.png",
        use_as_cart_img: false,
        created_at: new Date(),
        updated_at: new Date()
      };
      all_sizes.push(pizza_m);

      const pizza_p = {
        type_id: pizzas[index],
        name: "Pequena",
        price: prices[index * 4 + 3],
        description: "Tamanho:",
        preview:
          "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/pizzas/tamanho-p.png",
        use_as_cart_img: false,
        created_at: new Date(),
        updated_at: new Date()
      };
      all_sizes.push(pizza_p);
    }

    /**
     *  Massas
     */
    //Our pastas (product_type) Ids
    const pastas = [7, 8, 9, 10];
    //our pasta prices
    // We could customize prices as well, but for now leave all the same price
    const pastaPrices = [40.0, 30.0, 20.0];
    for (let index in pastas) {
      const pasta_g = {
        type_id: pastas[index],
        name: "Grande",
        price: pastaPrices[0],
        description: "Tamanho:",
        preview:
          "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/massas/grande.png",
        use_as_cart_img: false,
        created_at: new Date(),
        updated_at: new Date()
      };
      all_sizes.push(pasta_g);

      const pasta_m = {
        type_id: pastas[index],
        name: "Médio",
        price: pastaPrices[1],
        description: "Tamanho:",
        preview:
          "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/massas/medio.png",
        use_as_cart_img: false,
        created_at: new Date(),
        updated_at: new Date()
      };
      all_sizes.push(pasta_m);

      const pasta_p = {
        type_id: pastas[index],
        name: "Pequeno",
        price: pastaPrices[2],
        description: "Tamanho:",
        preview:
          "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/massas/pequeno.png",
        use_as_cart_img: false,
        created_at: new Date(),
        updated_at: new Date()
      };
      all_sizes.push(pasta_p);
    }

    /**
     * Calzones
     */
    //Our calzones (product_type) Ids
    const calzones = [11, 12];
    //our calzone prices
    // We could customize prices as well, but for now leave all the same price
    const calzonePrices = [43.0, 31.0, 22.0];
    for (let index in calzones) {
      const calzone_g = {
        type_id: calzones[index],
        name: "Grande",
        price: calzonePrices[0],
        description: "Tamanho:",
        preview:
          "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/calzones/calzone_grande.png",
        use_as_cart_img: false,
        created_at: new Date(),
        updated_at: new Date()
      };
      all_sizes.push(calzone_g);

      const calzone_m = {
        type_id: calzones[index],
        name: "Médio",
        price: calzonePrices[1],
        description: "Tamanho:",
        preview:
          "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/calzones/calzone_medio.png",
        use_as_cart_img: false,
        created_at: new Date(),
        updated_at: new Date()
      };
      all_sizes.push(calzone_m);

      const calzone_p = {
        type_id: calzones[index],
        name: "Pequeno",
        price: calzonePrices[2],
        description: "Tamanho:",
        preview:
          "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/calzones/calzone_pequeno.png",
        use_as_cart_img: false,
        created_at: new Date(),
        updated_at: new Date()
      };
      all_sizes.push(calzone_p);
    }

    /**
     * Bebidas
     */
    //Coca-cola
    const coca_lata = {
      type_id: 13,
      name: "350ml",
      price: 6.0,
      description: "Lata",
      preview:
        "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/bebidas/lata_355.png",
      use_as_cart_img: true,
      created_at: new Date(),
      updated_at: new Date()
    };
    all_sizes.push(coca_lata);

    const coca_600 = {
      type_id: 13,
      name: "600ml",
      price: 9.0,
      description: "Pet",
      preview:
        "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/bebidas/coca_600.png",
      use_as_cart_img: true,
      created_at: new Date(),
      updated_at: new Date()
    };
    all_sizes.push(coca_600);

    const coca_2l = {
      type_id: 13,
      name: "2L",
      price: 15.0,
      description: "Garrafa",
      preview:
        "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/bebidas/coca-2L.png",
      use_as_cart_img: true,
      created_at: new Date(),
      updated_at: new Date()
    };
    all_sizes.push(coca_2l);

    //Agua
    const agua_500 = {
      type_id: 14,
      name: "500ml",
      price: 7.0,
      description: "Garrafa",
      preview:
        "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/bebidas/agua_500.png",
      use_as_cart_img: true,
      created_at: new Date(),
      updated_at: new Date()
    };
    all_sizes.push(agua_500);

    //Ice Tea
    const cha_lata = {
      type_id: 15,
      name: "350ml",
      price: 7.0,
      description: "Lata",
      preview:
        "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/bebidas/ice-tea-350.png",
      use_as_cart_img: true,
      created_at: new Date(),
      updated_at: new Date()
    };
    all_sizes.push(cha_lata);

    //Redbull
    const redbull_lata = {
      type_id: 16,
      name: "250ml",
      price: 10.0,
      description: "Lata",
      preview:
        "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/bebidas/redbull_250.png",
      use_as_cart_img: true,
      created_at: new Date(),
      updated_at: new Date()
    };
    all_sizes.push(redbull_lata);

    /**
     * Bebidas alcoolicas
     */

    //Cerveja
    const cerveja_long = {
      type_id: 17,
      name: "355ml",
      price: 10.0,
      description: "Long-neck",
      preview:
        "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/alcool/eisenbahn-355.png",
      use_as_cart_img: true,
      created_at: new Date(),
      updated_at: new Date()
    };
    all_sizes.push(cerveja_long);

    //Vinho
    const vinho = {
      type_id: 18,
      name: "750ml",
      price: 60.0,
      description: "Garrafa",
      preview:
        "https://p3ddata.s3-sa-east-1.amazonaws.com/dev/gostack/alcool/vinho_750.png",
      use_as_cart_img: true,
      created_at: new Date(),
      updated_at: new Date()
    };
    all_sizes.push(vinho);

    return queryInterface.bulkInsert("product_sizes", all_sizes, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("product_sizes", null, {});
  }
};
