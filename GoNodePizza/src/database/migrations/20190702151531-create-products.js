'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      display: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'none'
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      minutes: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      preview: {
        allowNull: false,
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: () => new Date()
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: () => new Date()
      }
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('products');
  }
};
