'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.createTable('profSubj', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        professorId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'professors', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        subjectId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'subjects', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
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
    return await queryInterface.dropTable('profSubj')
  }
};
