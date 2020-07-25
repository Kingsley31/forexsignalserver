'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Signals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      signalName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      paid: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      trade_id:{
        type: Sequelize.STRING,
        allowNull: false
      },
      prediction:{
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Signals');
  }
};