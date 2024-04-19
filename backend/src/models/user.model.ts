import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';

export class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string; // Ensure to hash passwords, do not store plaintext passwords
  public role!: 'LIBRARIAN' | 'CUSTOMER'; // Assuming two roles: LIBRARIAN or CUSTOMER
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  role: {
    type: new DataTypes.ENUM('LIBRARIAN', 'CUSTOMER'),
    allowNull: false,
  },
}, {
  tableName: 'users',
  sequelize,
});

export default User;
