'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkInsert('students', [
         {
            id: 1,
            name: 'Camila Perez Sanchez',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 2,
            name: 'Juan Ignacio Gonza',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 3,
            name: 'Luciana Franco Hostera',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 4,
            name: 'Natalia Rios Faustino',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 5,
            name: 'Samara Rios Faustino',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 6,
            name: 'João Pedro de Oliveira Mata',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 7,
            name: 'Gabriela Rodrigues da Silva',
            createdAt: new Date(),
            updatedAt: new Date()
        },
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     return await queryInterface.bulkDelete('students', null, {});
  }
};
