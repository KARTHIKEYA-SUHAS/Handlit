require('dotenv').config({ quiet: true });

module.exports = {
  PORT: process.env.PORT || 5000,
  DATABASE_URL: process.env.DATABASE_URL,
};