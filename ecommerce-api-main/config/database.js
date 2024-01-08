const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecomtestdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;