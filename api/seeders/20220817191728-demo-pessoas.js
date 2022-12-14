'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Daniel',
        ativo: true,
        email: 'daniel@mail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jose',
        ativo: true,
        email: 'jose@mail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Matheus',
        ativo: true,
        email: 'matheus@mail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Joao',
        ativo: true,
        email: 'joao@mail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pedro',
        ativo: true,
        email: 'pedro@mail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jesus',
        ativo: true,
        email: 'jesus@mail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Moises',
        ativo: true,
        email: 'moises@mail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Pessoas', null, {});
    
  }
};
