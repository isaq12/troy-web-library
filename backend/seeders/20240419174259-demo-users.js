'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'johndoe',
        email: 'john@example.com',
        password: 'hashedpassword', // Replace with an actual hashed password
        role: 'CUSTOMER',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more user seed entries here
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
