'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Niveis', [
      {
        descr_nivel: 'Basico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'Intermediario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'Avancado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
      
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Niveis', null, {});
    
  }
};
