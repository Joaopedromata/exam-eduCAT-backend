'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.createTable('subjects', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('subjects')
  }
};
