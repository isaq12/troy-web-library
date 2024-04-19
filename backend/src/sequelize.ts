import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Destructure environment variables for easier access
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

// Instantiate a new Sequelize instance with individual variables
const sequelize = new Sequelize(DB_DATABASE!, DB_USERNAME!, DB_PASSWORD!, {
  host: DB_HOST!,
  dialect: 'postgres',
  logging: console.log, // Consider turning off in production
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// Test the connection
sequelize.authenticate()
  .then(() => console.log('Connection to the database has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

export default sequelize;
