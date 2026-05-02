const { Sequelize } = require("sequelize");
const { logger } = require("sequelize/lib/utils/logger");

const Connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false
  },
);

module.exports = Connection;
