import express from 'express';
import dotenv from 'dotenv';
import sequelize from './sequelize'; // Adjust the path if necessary

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Test the database connection when the server starts
sequelize.authenticate()
  .then(() => console.log('Connection to the database has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
