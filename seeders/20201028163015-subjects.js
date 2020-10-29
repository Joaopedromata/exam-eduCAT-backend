'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkInsert('subjects', [
         {
            id: 1,
            name: 'Cálculo I',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 2,
            name: 'Cálculo II',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 3,
            name: 'Trigonometria',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 4,
            name: 'Estatística',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 5,
            name: 'Matemática Financeira',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 6,
            name: 'Funções',
            createdAt: new Date(),
            updatedAt: new Date()
        },
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     return await queryInterface.bulkDelete('subjects', null, {});
  }
};
