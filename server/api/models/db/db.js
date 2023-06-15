const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

const config = {
  host: 'localhost',
  dialect: 'postgres',
  logging: process.env.LOGGING === 'true',
};

if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config
);

module.exports = sequelize;
