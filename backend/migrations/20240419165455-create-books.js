'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      title: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      author: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      coverImage: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      publisher: {
        type: Sequelize.STRING(128),
        allowNull: true
      },
      publicationDate: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      category: {
        type: Sequelize.STRING(128),
        allowNull: true
      },
      isbn: {
        type: Sequelize.STRING(128),
        allowNull: true
      },
      pageCount: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};
