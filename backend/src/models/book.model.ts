import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize'; // Make sure the path to sequelize.ts is correct

export class Book extends Model {
  public id!: number;
  public title!: string;
  public author!: string;
  public description!: string;
  public coverImage!: string;
  public publisher!: string;
  public publicationDate!: Date;
  public category!: string;
  public isbn!: string;
  public pageCount!: number;
}

Book.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  author: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: new DataTypes.TEXT,
    allowNull: false,
  },
  coverImage: {
    type: new DataTypes.STRING(255),
    allowNull: true,
  },
  publisher: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  publicationDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  category: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  isbn: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  pageCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
}, {
  tableName: 'books',
  sequelize, // This is the sequelize instance from sequelize.ts
});

export default Book;
