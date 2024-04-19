'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      userId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
        model: 'users',
        key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
        },
        bookId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
        model: 'books',
        key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
        },
        rating: {
        type: Sequelize.INTEGER,
        allowNull: false
        },
        comment: {
        type: Sequelize.STRING(1024),
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
        await queryInterface.dropTable('reviews');
        }
        };
