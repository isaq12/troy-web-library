'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
        userId: 1, // Assuming a user with ID 1 exists
        bookId: 1, // Assuming a book with ID 1 exists
        rating: 5,
        comment: 'An outstanding novel with deep insights.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more review seed entries here
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
