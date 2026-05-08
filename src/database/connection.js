const { Sequelize } = require("sequelize");
const { logger } = require("sequelize/lib/utils/logger");

const sequelize = new Sequelize(
  
mysql://root:MezIDowwBvdcyzvEcuxgAnPIfOQbJkVH@mysql.railway.internal:3306/railway,{
  dialect: 'mysql'
}
);

module.exports = Connection;
