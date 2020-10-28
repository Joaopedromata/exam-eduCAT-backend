'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkInsert('studSubj', [
         {
            id: 1,
            studentId: 1,
            subjectId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            id: 2,
            studentId: 2,
            subjectId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
         },
        {
            id: 3,
            studentId: 3,
            subjectId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 4,
            studentId: 4,
            subjectId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 5,
            studentId: 5,
            subjectId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 6,
            studentId: 6,
            subjectId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 7,
            studentId: 1,
            subjectId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 8,
            studentId: 2,
            subjectId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 9,
            studentId: 3,
            subjectId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 10,
            studentId: 1,
            subjectId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 11,
            studentId: 2,
            subjectId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 12,
            studentId: 5,
            subjectId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 13,
            studentId: 4,
            subjectId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 14,
            studentId: 5,
            subjectId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 15,
            studentId: 1,
            subjectId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 16,
            studentId: 2,
            subjectId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 17,
            studentId: 3,
            subjectId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 18,
            studentId: 4,
            subjectId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     return await queryInterface.bulkDelete('studSubj', null, {});
  }
};
