'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkInsert('professors', [
         {
            id: 1,
            name: 'Aristóteles',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 2,
            name: 'Albert Einstein',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 3,
            name: 'Nikola Tesla',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 4,
            name: 'Steve Jobs',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 5,
            name: 'Alan Turing',
            createdAt: new Date(),
            updatedAt: new Date()
         },
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('professors', null, {});
  }
};
