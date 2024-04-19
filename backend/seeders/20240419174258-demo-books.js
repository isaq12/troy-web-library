'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: '1984',
        author: 'George Orwell',
        description: 'Dystopian social science fiction novel and cautionary tale.',
        coverImage: 'path/to/image.jpg',
        publisher: 'Secker & Warburg',
        publicationDate: '1949-06-08',
        category: 'Dystopian',
        isbn: '1234567890',
        pageCount: 328,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more book seed entries here
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
