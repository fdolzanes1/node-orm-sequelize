'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
        
    await queryInterface.bulkInsert('Turmas', [
      {
        data_inicio: '2022-01-01',
        nivel_id: 1,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: '2022-02-01',
        nivel_id: 2,
        docente_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Turmas', null, {});
    
  }
};
