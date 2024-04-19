import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';
import { User } from './user.model';
import { Book } from './book.model';

export class Review extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public rating!: number;
  public comment!: string;
}

Review.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
},
userId: {
type: DataTypes.INTEGER.UNSIGNED,
allowNull: false,
references: {
model: 'users', // This is a reference to another model
key: 'id', // This is the column name of the referenced model
},
onUpdate: 'CASCADE',
onDelete: 'CASCADE',
},
bookId: {
type: DataTypes.INTEGER.UNSIGNED,
allowNull: false,
references: {
model: 'books', // This is a reference to another model
key: 'id', // This is the column name of the referenced model
},
onUpdate: 'CASCADE',
onDelete: 'CASCADE',
},
rating: {
type: DataTypes.INTEGER,
allowNull: false,
},
comment: {
type: new DataTypes.STRING(1024),
allowNull: true,
},
}, {
tableName: 'reviews',
sequelize, // This is the sequelize instance from sequelize.ts
});

// Associations
User.hasMany(Review, {
sourceKey: 'id',
foreignKey: 'userId',
as: 'reviews', // this determines the name in include statements
});

Book.hasMany(Review, {
sourceKey: 'id',
foreignKey: 'bookId',
as: 'reviews',
});

Review.belongsTo(User, {
foreignKey: 'userId',
as: 'user',
});

Review.belongsTo(Book, {
foreignKey: 'bookId',
as: 'book',
});

export default Review;
