'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkInsert('profSubj', [
         {
            id: 1,
            professorId: 1,
            subjectId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 2,
            professorId: 1,
            subjectId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
         },
        {
            id: 3,
            professorId: 1,
            subjectId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 4,
            professorId: 1,
            subjectId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 5,
            professorId: 1,
            subjectId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 6,
            professorId: 1,
            subjectId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 7,
            professorId: 2,
            subjectId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 8,
            professorId: 2,
            subjectId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 9,
            professorId: 2,
            subjectId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 10,
            professorId: 3,
            subjectId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     return await queryInterface.bulkDelete('profSubj', null, {});
  }
};
